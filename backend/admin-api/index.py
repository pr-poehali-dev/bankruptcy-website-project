import json
import os
import hashlib
import psycopg2
from psycopg2.extras import RealDictCursor


def get_db():
    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    schema = os.environ.get("MAIN_DB_SCHEMA", "public")
    conn.cursor().execute(f"SET search_path TO {schema}")
    conn.commit()
    return conn


def check_auth(headers: dict) -> bool:
    token = headers.get("x-admin-token", "")
    expected = os.environ.get("ADMIN_TOKEN", "")
    return token == expected and token != ""


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()


CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Token",
}


def resp(status: int, data):
    return {"statusCode": status, "headers": CORS_HEADERS, "body": json.dumps(data, ensure_ascii=False, default=str)}


def handler(event: dict, context) -> dict:
    """Единый API для Admin-панели: аутентификация и CRUD всего контента сайта"""

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    params = event.get("queryStringParameters") or {}
    action = params.get("action", "")
    item_id = params.get("id", "")
    method = event.get("httpMethod", "GET")
    headers = {k.lower(): v for k, v in (event.get("headers") or {}).items()}
    body = json.loads(event.get("body") or "{}")

    # --- AUTH ---
    if action == "login":
        password = body.get("password", "")
        conn = get_db()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        cur.execute("SELECT password_hash FROM admin_auth LIMIT 1")
        row = cur.fetchone()
        conn.close()
        if row and hash_password(password) == row["password_hash"]:
            token = os.environ.get("ADMIN_TOKEN", "")
            return resp(200, {"ok": True, "token": token})
        return resp(401, {"ok": False, "error": "Неверный пароль"})

    if action == "change-password":
        if not check_auth(headers):
            return resp(401, {"error": "Unauthorized"})
        new_password = body.get("password", "")
        if len(new_password) < 6:
            return resp(400, {"error": "Пароль должен быть не менее 6 символов"})
        conn = get_db()
        cur = conn.cursor()
        cur.execute("UPDATE admin_auth SET password_hash = %s", (hash_password(new_password),))
        conn.commit()
        conn.close()
        return resp(200, {"ok": True})

    # All routes below require auth
    if not check_auth(headers):
        return resp(401, {"error": "Unauthorized"})

    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    try:
        # --- HERO ---
        if action == "hero":
            if method == "GET":
                cur.execute("SELECT * FROM hero_content LIMIT 1")
                return resp(200, dict(cur.fetchone() or {}))
            if method == "PUT":
                cur.execute("""UPDATE hero_content SET badge=%s, heading=%s, description=%s,
                    cta_button=%s, stat_cases=%s, stat_won=%s, stat_years=%s, updated_at=NOW()""",
                    (body.get("badge"), body.get("heading"), body.get("description"),
                     body.get("cta_button"), body.get("stat_cases"), body.get("stat_won"), body.get("stat_years")))
                conn.commit()
                return resp(200, {"ok": True})

        # --- COMPANY INFO ---
        if action == "company":
            if method == "GET":
                cur.execute("SELECT * FROM company_info LIMIT 1")
                return resp(200, dict(cur.fetchone() or {}))
            if method == "PUT":
                cur.execute("""UPDATE company_info SET phone=%s, schedule=%s, email=%s,
                    address=%s, telegram_link=%s, whatsapp_link=%s, inn=%s, updated_at=NOW()""",
                    (body.get("phone"), body.get("schedule"), body.get("email"),
                     body.get("address"), body.get("telegram_link"), body.get("whatsapp_link"), body.get("inn")))
                conn.commit()
                return resp(200, {"ok": True})

        # --- PRICING ---
        if action == "pricing":
            if method == "GET":
                cur.execute("SELECT * FROM pricing_packages ORDER BY sort_order")
                packages = [dict(r) for r in cur.fetchall()]
                cur.execute("SELECT * FROM pricing_extra ORDER BY sort_order")
                extras = [dict(r) for r in cur.fetchall()]
                return resp(200, {"packages": packages, "extras": extras})
            if method == "POST":
                d = body
                cur.execute("""INSERT INTO pricing_packages (sort_order, name, price, description, is_featured, features, limitations)
                    VALUES (%s,%s,%s,%s,%s,%s,%s) RETURNING id""",
                    (d.get("sort_order", 0), d["name"], d["price"], d["description"],
                     d.get("is_featured", False), json.dumps(d.get("features", []), ensure_ascii=False),
                     json.dumps(d.get("limitations", []), ensure_ascii=False)))
                conn.commit()
                return resp(200, {"ok": True, "id": cur.fetchone()["id"]})

        if action == "pricing-package":
            if method == "PUT":
                d = body
                cur.execute("""UPDATE pricing_packages SET sort_order=%s, name=%s, price=%s, description=%s,
                    is_featured=%s, features=%s, limitations=%s, is_active=%s, updated_at=NOW() WHERE id=%s""",
                    (d.get("sort_order"), d["name"], d["price"], d["description"],
                     d.get("is_featured", False), json.dumps(d.get("features", []), ensure_ascii=False),
                     json.dumps(d.get("limitations", []), ensure_ascii=False), d.get("is_active", True), item_id))
                conn.commit()
                return resp(200, {"ok": True})
            if method == "DELETE":
                cur.execute("DELETE FROM pricing_packages WHERE id=%s", (item_id,))
                conn.commit()
                return resp(200, {"ok": True})

        if action == "pricing-extra":
            if method == "POST":
                cur.execute("INSERT INTO pricing_extra (sort_order, name, price) VALUES (%s,%s,%s) RETURNING id",
                    (body.get("sort_order", 0), body["name"], body["price"]))
                conn.commit()
                return resp(200, {"ok": True, "id": cur.fetchone()["id"]})
            if method == "PUT":
                cur.execute("UPDATE pricing_extra SET name=%s, price=%s, sort_order=%s WHERE id=%s",
                    (body["name"], body["price"], body.get("sort_order", 0), item_id))
                conn.commit()
                return resp(200, {"ok": True})
            if method == "DELETE":
                cur.execute("DELETE FROM pricing_extra WHERE id=%s", (item_id,))
                conn.commit()
                return resp(200, {"ok": True})

        # --- CASES ---
        if action == "cases":
            if method == "GET":
                cur.execute("SELECT * FROM cases ORDER BY sort_order")
                return resp(200, [dict(r) for r in cur.fetchall()])
            if method == "POST":
                d = body
                cur.execute("""INSERT INTO cases (sort_order, client_name, age, city, initial_debt, result, duration, story, is_featured)
                    VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id""",
                    (d.get("sort_order", 0), d["client_name"], d.get("age"), d["city"],
                     d["initial_debt"], d.get("result", "Списано 100%"), d["duration"], d["story"], d.get("is_featured", False)))
                conn.commit()
                return resp(200, {"ok": True, "id": cur.fetchone()["id"]})
            if method == "PUT":
                d = body
                cur.execute("""UPDATE cases SET sort_order=%s, client_name=%s, age=%s, city=%s, initial_debt=%s,
                    result=%s, duration=%s, story=%s, is_featured=%s, is_active=%s, updated_at=NOW() WHERE id=%s""",
                    (d.get("sort_order"), d["client_name"], d.get("age"), d["city"], d["initial_debt"],
                     d.get("result", "Списано 100%"), d["duration"], d["story"],
                     d.get("is_featured", False), d.get("is_active", True), item_id))
                conn.commit()
                return resp(200, {"ok": True})
            if method == "DELETE":
                cur.execute("DELETE FROM cases WHERE id=%s", (item_id,))
                conn.commit()
                return resp(200, {"ok": True})

        # --- FAQ ---
        if action == "faq":
            if method == "GET":
                cur.execute("SELECT * FROM faq_items ORDER BY sort_order")
                return resp(200, [dict(r) for r in cur.fetchall()])
            if method == "POST":
                cur.execute("INSERT INTO faq_items (sort_order, question, answer) VALUES (%s,%s,%s) RETURNING id",
                    (body.get("sort_order", 0), body["question"], body["answer"]))
                conn.commit()
                return resp(200, {"ok": True, "id": cur.fetchone()["id"]})
            if method == "PUT":
                cur.execute("UPDATE faq_items SET question=%s, answer=%s, sort_order=%s, is_active=%s WHERE id=%s",
                    (body["question"], body["answer"], body.get("sort_order"), body.get("is_active", True), item_id))
                conn.commit()
                return resp(200, {"ok": True})
            if method == "DELETE":
                cur.execute("DELETE FROM faq_items WHERE id=%s", (item_id,))
                conn.commit()
                return resp(200, {"ok": True})

        # --- BLOG ---
        if action == "blog":
            if method == "GET":
                cur.execute("SELECT * FROM blog_articles ORDER BY published_at DESC")
                return resp(200, [dict(r) for r in cur.fetchall()])
            if method == "POST":
                d = body
                cur.execute("""INSERT INTO blog_articles (slug, title, excerpt, content, category, read_time, published_at)
                    VALUES (%s,%s,%s,%s,%s,%s,%s) RETURNING id""",
                    (d["slug"], d["title"], d["excerpt"], d.get("content", ""),
                     d.get("category", "Практика"), d.get("read_time", 5), d.get("published_at")))
                conn.commit()
                return resp(200, {"ok": True, "id": cur.fetchone()["id"]})
            if method == "PUT":
                d = body
                cur.execute("""UPDATE blog_articles SET slug=%s, title=%s, excerpt=%s, content=%s,
                    category=%s, read_time=%s, published_at=%s, is_active=%s, updated_at=NOW() WHERE id=%s""",
                    (d["slug"], d["title"], d["excerpt"], d.get("content", ""),
                     d.get("category", "Практика"), d.get("read_time", 5),
                     d.get("published_at"), d.get("is_active", True), item_id))
                conn.commit()
                return resp(200, {"ok": True})
            if method == "DELETE":
                cur.execute("DELETE FROM blog_articles WHERE id=%s", (item_id,))
                conn.commit()
                return resp(200, {"ok": True})

        return resp(404, {"error": "Not found"})

    finally:
        conn.close()

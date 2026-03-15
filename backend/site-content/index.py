import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor


def get_db():
    dsn = os.environ["DATABASE_URL"]
    schema = os.environ.get("MAIN_DB_SCHEMA", "public")
    conn = psycopg2.connect(dsn, options=f"-c search_path={schema}")
    return conn


CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def resp(data):
    return {"statusCode": 200, "headers": CORS, "body": json.dumps(data, ensure_ascii=False, default=str)}


def handler(event: dict, context) -> dict:
    """Публичное API для чтения контента сайта (hero, company, pricing, cases, faq, blog)"""

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS, "body": ""}

    path = event.get("path", "/").rstrip("/") or "/"
    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    try:
        if path == "/hero":
            cur.execute("SELECT * FROM hero_content LIMIT 1")
            return resp(dict(cur.fetchone() or {}))

        if path == "/company":
            cur.execute("SELECT * FROM company_info LIMIT 1")
            return resp(dict(cur.fetchone() or {}))

        if path == "/pricing":
            cur.execute("SELECT * FROM pricing_packages WHERE is_active=TRUE ORDER BY sort_order")
            packages = [dict(r) for r in cur.fetchall()]
            cur.execute("SELECT * FROM pricing_extra WHERE is_active=TRUE ORDER BY sort_order")
            extras = [dict(r) for r in cur.fetchall()]
            return resp({"packages": packages, "extras": extras})

        if path == "/cases":
            cur.execute("SELECT * FROM cases WHERE is_active=TRUE ORDER BY sort_order")
            return resp([dict(r) for r in cur.fetchall()])

        if path == "/faq":
            cur.execute("SELECT * FROM faq_items WHERE is_active=TRUE ORDER BY sort_order")
            return resp([dict(r) for r in cur.fetchall()])

        if path == "/blog":
            cur.execute("SELECT * FROM blog_articles WHERE is_active=TRUE ORDER BY published_at DESC")
            return resp([dict(r) for r in cur.fetchall()])

        if path == "/all":
            cur.execute("SELECT * FROM hero_content LIMIT 1")
            hero = dict(cur.fetchone() or {})
            cur.execute("SELECT * FROM company_info LIMIT 1")
            company = dict(cur.fetchone() or {})
            cur.execute("SELECT * FROM pricing_packages WHERE is_active=TRUE ORDER BY sort_order")
            packages = [dict(r) for r in cur.fetchall()]
            cur.execute("SELECT * FROM pricing_extra WHERE is_active=TRUE ORDER BY sort_order")
            extras = [dict(r) for r in cur.fetchall()]
            cur.execute("SELECT * FROM cases WHERE is_active=TRUE ORDER BY sort_order")
            cases = [dict(r) for r in cur.fetchall()]
            cur.execute("SELECT * FROM faq_items WHERE is_active=TRUE ORDER BY sort_order")
            faq = [dict(r) for r in cur.fetchall()]
            cur.execute("SELECT * FROM blog_articles WHERE is_active=TRUE ORDER BY published_at DESC")
            blog = [dict(r) for r in cur.fetchall()]
            return resp({"hero": hero, "company": company, "packages": packages, "extras": extras, "cases": cases, "faq": faq, "blog": blog})

        return {"statusCode": 404, "headers": CORS, "body": json.dumps({"error": "Not found"})}

    finally:
        conn.close()
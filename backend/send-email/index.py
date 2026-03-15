import json
import os
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта в Telegram"""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "")
    phone = body.get("phone", "")
    email = body.get("email", "")
    message = body.get("message", "")

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")

    text = (
        f"📬 *Новая заявка с сайта*\n\n"
        f"👤 *Имя:* {name}\n"
        f"📞 *Телефон:* {phone}\n"
        f"✉️ *Email:* {email}\n"
        f"💬 *Сообщение:* {message or '—'}"
    )

    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown"
    }).encode("utf-8")

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    try:
        urllib.request.urlopen(req, timeout=10)
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8")
        print(f"[Telegram Error] status={e.code} chat_id={chat_id!r} token_len={len(token)} response={error_body}")
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"ok": False, "error": error_body}),
        }

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
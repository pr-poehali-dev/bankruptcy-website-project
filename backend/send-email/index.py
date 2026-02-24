import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту tlt@meraprava.ru"""
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

    smtp_host = "smtp.yandex.ru"
    smtp_port = 465
    smtp_user = "tlt@meraprava.ru"
    smtp_password = os.environ.get("SMTP_PASSWORD", "txafufzpijhvnozf")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = smtp_user
    msg["To"] = smtp_user

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #1a56db;">Новая заявка с сайта ВЕРНОЕ РЕШЕНИЕ</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:8px; border:1px solid #ddd; background:#f5f5f5; width:30%"><b>Имя</b></td><td style="padding:8px; border:1px solid #ddd;">{name}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd; background:#f5f5f5;"><b>Телефон</b></td><td style="padding:8px; border:1px solid #ddd;">{phone}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd; background:#f5f5f5;"><b>Email</b></td><td style="padding:8px; border:1px solid #ddd;">{email}</td></tr>
        <tr><td style="padding:8px; border:1px solid #ddd; background:#f5f5f5;"><b>Сообщение</b></td><td style="padding:8px; border:1px solid #ddd;">{message}</td></tr>
      </table>
    </body></html>
    """

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
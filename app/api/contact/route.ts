import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "shps.sea@gmail.com";
  const from = process.env.RESEND_FROM_EMAIL || "SEA Website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ ok: false, message: "Email service is not configured." }, { status: 500 });
  }

  const form = await request.formData();
  const name = clean(form.get("name"));
  const company = clean(form.get("company"));
  const email = clean(form.get("email"));
  const phone = clean(form.get("phone"));
  const subject = clean(form.get("subject"));
  const message = clean(form.get("message"));

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, message: "Name, email and message are required." }, { status: 400 });
  }

  const title = subject ? `SEA website request: ${subject}` : "SEA website request";
  const rows = [
    ["Name", name],
    ["Company", company || "-"],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Subject", subject || "-"],
    ["Message", message],
  ];

  const htmlRows = rows
    .map(([label, value]) => {
      const safeValue = escapeHtml(value).replaceAll("\n", "<br />");
      return `<tr><td style="padding:8px 12px;border:1px solid #d8e6ed;font-weight:700;">${label}</td><td style="padding:8px 12px;border:1px solid #d8e6ed;">${safeValue}</td></tr>`;
    })
    .join("");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: title,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `<h2>New SEA website request</h2><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${htmlRows}</table>`,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend contact email failed:", details);
    return NextResponse.json({ ok: false, message: "Email could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

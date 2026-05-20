import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Please fill in your name, email, and message." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = "ig.prasannayadav@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? user;

  if (host && user && pass && fromEmail) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="white-space: pre-wrap;"><strong>Message:</strong><br />${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent to my inbox." });
  }

  const relayResponse = await fetch("https://formsubmit.co/ig.prasannayadav@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name,
      email,
      message,
      _subject: `Portfolio message from ${name}`,
      _replyto: email,
      _template: "table",
      _captcha: "false",
    }).toString(),
  });

  if (!relayResponse.ok) {
    return NextResponse.json(
      {
        message:
          "Email delivery failed. Configure SMTP in .env.local or use the fallback relay service.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Message sent to my inbox." });
}
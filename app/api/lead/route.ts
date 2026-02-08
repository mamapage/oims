import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json(
      { status: "error", message: "LEAD_WEBHOOK_URL is not configured" },
      { status: 500 }
    );
  }

  try {
    const payload = await request.json();

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { status: "error", message: `Webhook failed: ${res.status}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: String(error) },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const n8nUrl = process.env.n8n;

    if (!n8nUrl) {
        return NextResponse.json({ error: "n8n webhook URL is not configured" }, { status: 500 });
    }

    const res = await fetch(n8nUrl,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatInput: body.message // map frontend -> n8n
            }),
        }
    );

    const data = await res.json();
    return NextResponse.json(data);
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const n8nUrl = process.env.n8n;

    if (!n8nUrl) {
        return NextResponse.json({ error: "n8n webhook URL is not configured" }, { status: 500 });
    }

    try {
        const res = await fetch(n8nUrl,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "sendMessage",
                    chatInput: body.message,
                    sessionId: body.sessionId || "default-session"
                }),
            }
        );

        if (!res.ok) {
            console.error("N8n proxy response not ok:", res.status, res.statusText);
            throw new Error(`n8n responded with status: ${res.status}`);
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error communicating with n8n:", error);
        return NextResponse.json({ error: "Chatbot service is currently unavailable." }, { status: 500 });
    }
}

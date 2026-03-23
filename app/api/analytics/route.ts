import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { event, page, referrer, user_agent, session_id } = body;

    if (!event || typeof event !== "string") {
      return NextResponse.json({ error: "event is required" }, { status: 400 });
    }

    const supabase = createServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
    }
    const { error } = await supabase.from("spe_analytics").insert({
      event,
      page: page || null,
      referrer: referrer || null,
      user_agent: user_agent || null,
      session_id: session_id || null,
    });

    if (error) {
      console.error("[Analytics Insert Error]", error.message);
      return NextResponse.json({ error: "Failed to track event" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { page, referrer } = await request.json();

    if (!page || typeof page !== "string") {
      return NextResponse.json({ error: "page is required" }, { status: 400 });
    }

    const supabase = createServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
    }
    const { error } = await supabase.from("spe_analytics").insert({
      event: "page_view",
      page,
      referrer: referrer || null,
      user_agent: request.headers.get("user-agent") || null,
    });

    if (error) {
      console.error("[Pageview Error]", error.message);
      return NextResponse.json({ error: "Failed to track" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

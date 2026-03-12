import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { business } from "@/data/business";

export async function GET() {
  // Vercel cron calls this endpoint daily
  const resendKey = process.env.RESEND_API_KEY;
  const digestEmail = process.env.DIGEST_EMAIL;

  if (!resendKey || !digestEmail) {
    return NextResponse.json(
      { skipped: true, reason: "RESEND_API_KEY or DIGEST_EMAIL not set" },
      { status: 200 }
    );
  }

  try {
    const supabase = createServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
    }
    const since = new Date();
    since.setHours(since.getHours() - 24);

    const { data: leads, error } = await supabase
      .from("spe_leads")
      .select("*")
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[Digest Error]", error.message);
      return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }

    if (!leads || leads.length === 0) {
      return NextResponse.json({ sent: false, reason: "No new leads in last 24h" });
    }

    // Build email HTML
    const leadRows = leads
      .map(
        (l) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #eee">${l.first_name} ${l.last_name}</td>
          <td style="padding:8px;border-bottom:1px solid #eee">${l.phone || "-"}</td>
          <td style="padding:8px;border-bottom:1px solid #eee">${l.email || "-"}</td>
          <td style="padding:8px;border-bottom:1px solid #eee">${l.service || "-"}</td>
        </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#1C1C1E;color:white;padding:20px;border-radius:8px 8px 0 0">
          <h2 style="margin:0;font-size:18px">${business.name} - Daily Lead Digest</h2>
          <p style="margin:4px 0 0;color:#9CA3AF;font-size:14px">${leads.length} new lead${leads.length === 1 ? "" : "s"} in the last 24 hours</p>
        </div>
        <div style="padding:16px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <thead>
              <tr style="background:#f5f5f5">
                <th style="padding:8px;text-align:left">Name</th>
                <th style="padding:8px;text-align:left">Phone</th>
                <th style="padding:8px;text-align:left">Email</th>
                <th style="padding:8px;text-align:left">Service</th>
              </tr>
            </thead>
            <tbody>${leadRows}</tbody>
          </table>
          <p style="margin-top:16px;font-size:13px;color:#6B7280">
            <a href="${business.domain}/admin/leads" style="color:#E31837">View all leads in dashboard</a>
          </p>
        </div>
      </div>
    `;

    // Send via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${business.name} <leads@superiorpowerelectric.ca>`,
        to: digestEmail,
        subject: `${leads.length} new lead${leads.length === 1 ? "" : "s"} today - ${business.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[Resend Error]", err);
      return NextResponse.json({ error: "Failed to send digest" }, { status: 500 });
    }

    return NextResponse.json({ sent: true, leadCount: leads.length });
  } catch (err) {
    console.error("[Digest Error]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

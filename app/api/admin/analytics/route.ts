import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createServerClient } from "@/lib/supabase";

export async function GET(request: Request) {
  const authenticated = await getSession();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get("days") || "30");
  const since = new Date();
  since.setDate(since.getDate() - days);

  const supabase = createServerClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }

  // Fetch leads and analytics in parallel
  const [leadsResult, analyticsResult, allTimeLeadsResult] = await Promise.allSettled([
    supabase
      .from("spe_leads")
      .select("id, created_at, service, source_page, status")
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: true }),
    supabase
      .from("spe_analytics")
      .select("event, page, created_at")
      .gte("created_at", since.toISOString()),
    supabase
      .from("spe_leads")
      .select("id", { count: "exact", head: true }),
  ]);

  const leads =
    leadsResult.status === "fulfilled" ? leadsResult.value.data || [] : [];
  const analytics =
    analyticsResult.status === "fulfilled" ? analyticsResult.value.data || [] : [];
  const allTimeCount =
    allTimeLeadsResult.status === "fulfilled" ? allTimeLeadsResult.value.count || 0 : 0;

  // Leads by source page
  const bySource: Record<string, number> = {};
  leads.forEach((l) => {
    const key = l.source_page || "Unknown";
    bySource[key] = (bySource[key] || 0) + 1;
  });

  // Leads by service
  const byService: Record<string, number> = {};
  leads.forEach((l) => {
    const key = l.service || "Not specified";
    byService[key] = (byService[key] || 0) + 1;
  });

  // Leads by status
  const byStatus: Record<string, number> = {};
  leads.forEach((l) => {
    byStatus[l.status] = (byStatus[l.status] || 0) + 1;
  });

  // Conversion funnel
  const pageViews = analytics.filter((a) => a.event === "page_view").length;
  const formStarts = analytics.filter((a) => a.event === "form_start").length;
  const formSubmits = analytics.filter((a) => a.event === "form_submit").length;

  // Leads per day (for chart)
  const leadsPerDay: Record<string, number> = {};
  leads.forEach((l) => {
    const day = new Date(l.created_at).toISOString().split("T")[0];
    leadsPerDay[day] = (leadsPerDay[day] || 0) + 1;
  });

  return NextResponse.json({
    totalLeads: leads.length,
    allTimeLeads: allTimeCount,
    bySource: Object.entries(bySource).map(([name, count]) => ({ name, count })),
    byService: Object.entries(byService).map(([name, count]) => ({ name, count })),
    byStatus: Object.entries(byStatus).map(([name, count]) => ({ name, count })),
    funnel: { pageViews, formStarts, formSubmits },
    leadsPerDay: Object.entries(leadsPerDay)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date)),
  });
}

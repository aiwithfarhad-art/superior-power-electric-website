import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createServerClient } from "@/lib/supabase";

export async function GET() {
  const authenticated = await getSession();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServerClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable" }, { status: 503 });
  }
  const { data, error } = await supabase
    .from("spe_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Failed to export" }, { status: 500 });
  }

  // Build CSV
  const headers = [
    "Date",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Service",
    "Source",
    "Status",
    "Message",
    "Notes",
  ];

  const rows = (data || []).map((lead) => [
    new Date(lead.created_at).toLocaleDateString("en-CA"),
    lead.first_name || "",
    lead.last_name || "",
    lead.email || "",
    lead.phone || "",
    lead.service || "",
    lead.source_page || "",
    lead.status || "",
    (lead.message || "").replace(/"/g, '""'),
    (lead.notes || "").replace(/"/g, '""'),
  ]);

  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      row.map((cell) => `"${cell}"`).join(",")
    ),
  ].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="spe-leads-${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}

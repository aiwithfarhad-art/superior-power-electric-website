import { NextResponse } from "next/server";
import { z } from "zod/v4";
import { createServerClient } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

function parseName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const { firstName, lastName } = parseName(data.name);

    // Insert lead into Supabase
    const supabase = createServerClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Failed to save your message. Please try again or call us directly." },
        { status: 503 }
      );
    }
    const { error } = await supabase.from("spe_leads").insert({
      first_name: firstName,
      last_name: lastName,
      email: data.email || null,
      phone: data.phone,
      message: data.message || null,
      service: data.service || null,
      source_page: data.source || "website",
      status: "new",
    });

    if (error) {
      console.error("[Supabase Insert Error]", {
        code: error.code,
        message: error.message,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        { error: "Failed to save your message. Please try again or call us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message received. We will be in touch within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

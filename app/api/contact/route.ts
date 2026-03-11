import { NextResponse } from "next/server";
import { z } from "zod/v4";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

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

    // Log the submission for now - email integration comes later
    console.log("[Contact Form Submission]", {
      name: data.name,
      phone: data.phone,
      email: data.email || "not provided",
      service: data.service || "not specified",
      message: data.message || "no message",
      source: data.source || "unknown",
      timestamp: new Date().toISOString(),
    });

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

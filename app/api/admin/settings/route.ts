import { NextResponse } from "next/server";
import { getSession, checkPassword } from "@/lib/auth";
import { business } from "@/data/business";

export async function GET() {
  const authenticated = await getSession();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    business: {
      name: business.name,
      phone: business.phone,
      email: business.email,
      address: business.address.full,
      esaLicense: business.esaLicense,
    },
    digestEmail: process.env.DIGEST_EMAIL || "",
    resendConfigured: !!process.env.RESEND_API_KEY,
  });
}

export async function PATCH(request: Request) {
  const authenticated = await getSession();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Current and new password required" },
        { status: 400 }
      );
    }

    if (!checkPassword(currentPassword)) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 401 });
    }

    // Password is stored as env var - can't be changed at runtime
    return NextResponse.json(
      {
        error: "Password is set via environment variable. Update ADMIN_PASSWORD in your Vercel project settings, then redeploy.",
      },
      { status: 422 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

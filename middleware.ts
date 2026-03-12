import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "spe_admin_session";

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Only protect /admin routes (except /admin/login)
    if (!pathname.startsWith("/admin")) {
      return NextResponse.next();
    }

    // Allow login page through
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Allow admin API routes through (they handle their own auth)
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.next();
    }

    // Check for session cookie
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Token exists - let the page render (server components verify further)
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error - allowing request through:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};

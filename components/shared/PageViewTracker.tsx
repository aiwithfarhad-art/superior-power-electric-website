"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageViewTracker() {
  const pathname = usePathname();
  const lastPathname = useRef("");

  useEffect(() => {
    if (pathname === lastPathname.current) return;
    lastPathname.current = pathname;

    // Skip admin routes
    if (pathname.startsWith("/admin")) return;

    const body = JSON.stringify({
      page: pathname,
      referrer: document.referrer || null,
    });

    // Use sendBeacon for reliability, fall back to fetch
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/pageview", blob);
    } else {
      fetch("/api/pageview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }).catch(() => {});
    }
  }, [pathname]);

  return null;
}

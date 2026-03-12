"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Zap,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const sidebar = (
    <div className="flex flex-col h-full bg-[#1C1C1E] border-r border-[#2A2A2E]">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[#2A2A2E]">
        <div className="w-8 h-8 bg-[#E31837] rounded-lg flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-bold text-sm">SPE Admin</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                active
                  ? "bg-[#E31837] text-white"
                  : "text-[#9CA3AF] hover:text-white hover:bg-[#2A2A2E]"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-[#2A2A2E]">
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#9CA3AF] hover:text-white hover:bg-[#2A2A2E] transition-colors w-full cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          {loggingOut ? "Logging out..." : "Log Out"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111113] flex">
      {/* Desktop sidebar */}
      <div className="hidden md:block w-56 flex-shrink-0">{sidebar}</div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-56 z-50 transform transition-transform md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebar}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#1C1C1E] border-b border-[#2A2A2E]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-white font-bold text-sm">SPE Admin</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white opacity-0 pointer-events-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

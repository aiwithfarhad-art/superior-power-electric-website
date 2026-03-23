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
    <div className="flex flex-col h-full bg-[#141416] relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="relative flex items-center gap-3.5 px-6 py-6">
        <div className="w-10 h-10 bg-gradient-to-br from-[#E31837] to-[#B91430] rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(227,24,55,0.3)]">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="text-white font-semibold text-[15px] block leading-tight tracking-[-0.01em]">SPE Admin</span>
          <span className="text-white/30 text-[10px] uppercase tracking-[0.15em] font-medium">Dashboard</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Nav */}
      <nav className="relative flex-1 px-4 py-5 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-300",
                active
                  ? "bg-gradient-to-r from-[#E31837] to-[#C91530] text-white shadow-[0_4px_16px_rgba(227,24,55,0.25)]"
                  : "text-white/40 hover:text-white/80 hover:bg-white/[0.04]"
              )}
            >
              <item.icon className={cn("w-[18px] h-[18px]", active ? "text-white" : "text-white/30")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="relative px-4 py-5">
        <div className="mx-1 mb-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-medium text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-all duration-300 w-full cursor-pointer"
        >
          <LogOut className="w-[18px] h-[18px]" />
          {loggingOut ? "Logging out..." : "Log Out"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F6F5F2] flex">
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-[260px] flex-shrink-0 fixed inset-y-0 left-0 z-30">
        {sidebar}
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-[280px] z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebar}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-5 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 cursor-pointer hover:bg-white/20 hover:text-white transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[260px]">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-[#F6F5F2] sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1A1A1A] cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#E31837] to-[#B91430] rounded-lg flex items-center justify-center shadow-[0_2px_8px_rgba(227,24,55,0.25)]">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-[#1A1A1A] font-semibold text-[15px] tracking-[-0.01em]">SPE Admin</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-8 lg:p-10 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

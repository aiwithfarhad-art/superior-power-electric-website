"use client";

import { useState, useEffect } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import {
  Loader2,
  Building2,
  Phone,
  Mail,
  MapPin,
  Shield,
  Bell,
  Lock,
  Eye,
  EyeOff,
  Settings2,
} from "lucide-react";

interface SettingsData {
  business: {
    name: string;
    phone: string;
    email: string;
    address: string;
    esaLicense: string;
  };
  digestEmail: string;
  resendConfigured: boolean;
}

export default function SettingsPage() {
  const [data, setData] = useState<SettingsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Password form
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<{
    type: "error" | "info";
    text: string;
  } | null>(null);
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      const res = await fetch("/api/admin/settings");
      if (res.ok) {
        setData(await res.json());
      }
    } catch {
      // Silent fail
    } finally {
      setLoading(false);
    }
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setPasswordMsg(null);
    setChangingPassword(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const body = await res.json();

      if (res.status === 422) {
        setPasswordMsg({ type: "info", text: body.error });
      } else if (!res.ok) {
        setPasswordMsg({ type: "error", text: body.error });
      }
    } catch {
      setPasswordMsg({ type: "error", text: "Something went wrong" });
    } finally {
      setChangingPassword(false);
    }
  }

  return (
    <AdminShell>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-[22px] font-bold text-[#1C1C1E] tracking-[-0.02em]">Settings</h1>
          <p className="text-[13px] text-[#8A8A8A] mt-0.5">
            Dashboard configuration and business info
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-[#E31837] animate-spin" />
          </div>
        ) : data ? (
          <>
            {/* Business Info */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E31837]/10 to-[#E31837]/5 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#E31837]" />
                </div>
                <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em]">
                  Business Information
                </h2>
              </div>
              <div className="space-y-0">
                <InfoRow icon={Building2} label="Name" value={data.business.name} />
                <InfoRow icon={Phone} label="Phone" value={data.business.phone} />
                <InfoRow icon={Mail} label="Email" value={data.business.email} />
                <InfoRow icon={MapPin} label="Address" value={data.business.address} />
                <InfoRow icon={Shield} label="ESA License" value={data.business.esaLicense} last />
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em]">
                  Notifications
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#4A4A4A] font-medium">
                    Daily email digest
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.04em] ${
                      data.resendConfigured
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-[#F6F5F2] text-[#ABABAB]"
                    }`}
                  >
                    {data.resendConfigured ? "Active" : "Not configured"}
                  </span>
                </div>
                {data.digestEmail && (
                  <div className="text-[13px] text-[#8A8A8A]">
                    Sends to:{" "}
                    <span className="font-semibold text-[#4A4A4A]">
                      {data.digestEmail}
                    </span>
                  </div>
                )}
                {!data.resendConfigured && (
                  <div className="bg-[#FAFAF8] rounded-xl p-4">
                    <p className="text-[12px] text-[#ABABAB] leading-relaxed">
                      Set RESEND_API_KEY and DIGEST_EMAIL in Vercel env vars to
                      enable daily lead digest emails.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em]">
                  Change Password
                </h2>
              </div>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current password"
                    required
                    className="w-full px-4 py-3 pr-11 bg-[#FAFAF8] rounded-xl text-[#1C1C1E] text-[14px] placeholder-[#CDCDCD] focus:outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#CDCDCD] cursor-pointer hover:text-[#8A8A8A] transition-colors"
                  >
                    {showCurrent ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                    required
                    className="w-full px-4 py-3 pr-11 bg-[#FAFAF8] rounded-xl text-[#1C1C1E] text-[14px] placeholder-[#CDCDCD] focus:outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#CDCDCD] cursor-pointer hover:text-[#8A8A8A] transition-colors"
                  >
                    {showNew ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {passwordMsg && (
                  <p
                    className={`text-[13px] font-medium ${
                      passwordMsg.type === "error"
                        ? "text-[#E31837]"
                        : "text-[#F59E0B]"
                    }`}
                  >
                    {passwordMsg.text}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={changingPassword}
                  className="px-6 py-3 bg-gradient-to-b from-[#E31837] to-[#C91530] text-white text-[13px] rounded-xl font-bold hover:shadow-[0_4px_16px_rgba(227,24,55,0.3)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {changingPassword ? "Checking..." : "Update Password"}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
            <Settings2 className="w-8 h-8 text-[#CDCDCD] mx-auto mb-3" />
            <p className="text-[#8A8A8A] text-[14px]">Failed to load settings</p>
          </div>
        )}
      </div>
    </AdminShell>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  last = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 py-3.5 ${
        !last ? "border-b border-[#F2F0EC]" : ""
      }`}
    >
      <Icon className="w-4 h-4 text-[#CDCDCD] flex-shrink-0" />
      <span className="text-[12px] text-[#ABABAB] w-20 font-semibold uppercase tracking-[0.04em]">
        {label}
      </span>
      <span className="text-[14px] text-[#1C1C1E] font-medium">{value}</span>
    </div>
  );
}

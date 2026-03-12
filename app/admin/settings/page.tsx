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
          <h1 className="text-xl font-bold text-white">Settings</h1>
          <p className="text-sm text-[#9CA3AF]">
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
            <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-[#E31837]" />
                <h2 className="text-sm font-medium text-white">
                  Business Information
                </h2>
              </div>
              <div className="space-y-3">
                <InfoRow
                  icon={Building2}
                  label="Name"
                  value={data.business.name}
                />
                <InfoRow
                  icon={Phone}
                  label="Phone"
                  value={data.business.phone}
                />
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value={data.business.email}
                />
                <InfoRow
                  icon={MapPin}
                  label="Address"
                  value={data.business.address}
                />
                <InfoRow
                  icon={Shield}
                  label="ESA License"
                  value={data.business.esaLicense}
                />
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4 text-[#E31837]" />
                <h2 className="text-sm font-medium text-white">
                  Notifications
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#9CA3AF]">
                    Daily email digest
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${data.resendConfigured ? "bg-green-500/20 text-green-400" : "bg-[#3A3A3E] text-[#6B7280]"}`}
                  >
                    {data.resendConfigured ? "Active" : "Not configured"}
                  </span>
                </div>
                {data.digestEmail && (
                  <div className="text-sm text-[#6B7280]">
                    Sends to: {data.digestEmail}
                  </div>
                )}
                {!data.resendConfigured && (
                  <p className="text-xs text-[#6B7280]">
                    Set RESEND_API_KEY and DIGEST_EMAIL in Vercel env vars to
                    enable daily lead digest emails.
                  </p>
                )}
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-5">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4 text-[#E31837]" />
                <h2 className="text-sm font-medium text-white">
                  Change Password
                </h2>
              </div>
              <form onSubmit={handlePasswordChange} className="space-y-3">
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current password"
                    required
                    className="w-full px-4 py-2.5 pr-10 bg-[#2A2A2E] border border-[#3A3A3E] rounded-lg text-white text-sm placeholder-[#6B7280] focus:outline-none focus:border-[#E31837]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] cursor-pointer"
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
                    className="w-full px-4 py-2.5 pr-10 bg-[#2A2A2E] border border-[#3A3A3E] rounded-lg text-white text-sm placeholder-[#6B7280] focus:outline-none focus:border-[#E31837]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] cursor-pointer"
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
                    className={`text-sm ${passwordMsg.type === "error" ? "text-[#E31837]" : "text-[#F59E0B]"}`}
                  >
                    {passwordMsg.text}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={changingPassword}
                  className="px-4 py-2.5 bg-[#E31837] text-white text-sm rounded-lg font-medium hover:bg-[#C21430] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {changingPassword ? "Checking..." : "Update Password"}
                </button>
              </form>
            </div>
          </>
        ) : (
          <p className="text-[#6B7280] text-sm">Failed to load settings</p>
        )}
      </div>
    </AdminShell>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-3.5 h-3.5 text-[#6B7280] flex-shrink-0" />
      <span className="text-xs text-[#6B7280] w-16">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
}

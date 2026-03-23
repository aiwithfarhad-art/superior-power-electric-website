"use client";

import { useState, useEffect, useMemo } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import {
  Search,
  Download,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MessageSquare,
  StickyNote,
  Save,
  Loader2,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Lead {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  service: string | null;
  source_page: string | null;
  status: string;
  notes: string | null;
}

const STATUS_OPTIONS = ["new", "contacted", "quoted", "won", "lost"] as const;

const STATUS_STYLES: Record<string, string> = {
  new: "bg-blue-50 text-blue-600",
  contacted: "bg-amber-50 text-amber-600",
  quoted: "bg-orange-50 text-orange-600",
  won: "bg-emerald-50 text-emerald-600",
  lost: "bg-neutral-100 text-neutral-400",
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<Record<string, string>>({});
  const [savingNotes, setSavingNotes] = useState<string | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch {
      // Silent fail
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    setUpdatingStatus(id);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status } : l))
        );
      }
    } catch {
      // Silent fail
    } finally {
      setUpdatingStatus(null);
    }
  }

  async function saveNotes(id: string) {
    setSavingNotes(id);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, notes: editingNotes[id] || "" }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) =>
            l.id === id ? { ...l, notes: editingNotes[id] || "" } : l
          )
        );
      }
    } catch {
      // Silent fail
    } finally {
      setSavingNotes(null);
    }
  }

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      if (filterStatus !== "all" && lead.status !== filterStatus) return false;
      if (search) {
        const q = search.toLowerCase();
        const name = `${lead.first_name} ${lead.last_name}`.toLowerCase();
        const email = (lead.email || "").toLowerCase();
        const phone = (lead.phone || "").toLowerCase();
        return name.includes(q) || email.includes(q) || phone.includes(q);
      }
      return true;
    });
  }, [leads, search, filterStatus]);

  function toggleExpand(id: string) {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      if (editingNotes[id] === undefined) {
        const lead = leads.find((l) => l.id === id);
        setEditingNotes((prev) => ({ ...prev, [id]: lead?.notes || "" }));
      }
    }
  }

  return (
    <AdminShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A] tracking-[-0.02em]">Leads</h1>
            <p className="text-[13px] text-[#ABABAB] mt-1 font-medium">
              {filtered.length} of {leads.length} leads
            </p>
          </div>
          <a
            href="/api/admin/leads/export"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-[#1A1A1A] text-[13px] font-semibold rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <Download className="w-4 h-4 text-[#ABABAB]" />
            Export CSV
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CDCDCD]" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl text-[#1A1A1A] text-[14px] placeholder-[#CDCDCD] focus:outline-none shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12),0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-white rounded-xl text-[#1A1A1A] text-[14px] focus:outline-none cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12),0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300"
          >
            <option value="all">All statuses</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-6 h-6 text-[#E31837] animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
            <div className="w-16 h-16 rounded-2xl bg-[#F6F5F2] flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-[#D1D1D1]" />
            </div>
            <p className="text-[#1A1A1A] text-[15px] font-semibold">No leads found</p>
            <p className="text-[#ABABAB] text-[13px] mt-1.5">Leads from your contact form will appear here</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Desktop header */}
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_110px_60px] gap-4 px-6 py-4 text-[11px] font-semibold text-[#ABABAB] uppercase tracking-[0.08em]">
              <div>Date</div>
              <div>Name</div>
              <div>Contact</div>
              <div>Service</div>
              <div>Status</div>
              <div></div>
            </div>

            {/* Rows */}
            {filtered.map((lead, idx) => (
              <div key={lead.id}>
                {/* Main row */}
                <div
                  onClick={() => toggleExpand(lead.id)}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_110px_60px] gap-2 md:gap-4 px-6 py-4 hover:bg-[#FAFAF8] cursor-pointer transition-colors duration-200",
                    idx > 0 && "border-t border-[#F2F0EC]"
                  )}
                >
                  <div className="text-[13px] text-[#8A8A8A]">
                    {new Date(lead.created_at).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="text-[#CDCDCD] ml-2 text-[11px]">
                      {new Date(lead.created_at).toLocaleTimeString("en-CA", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="text-[14px] text-[#1A1A1A] font-semibold tracking-[-0.01em]">
                    {lead.first_name} {lead.last_name}
                  </div>
                  <div className="text-[13px] text-[#8A8A8A] space-y-1">
                    {lead.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#CDCDCD]" />
                        {lead.phone}
                      </div>
                    )}
                    {lead.email && (
                      <div className="flex items-center gap-2 truncate">
                        <Mail className="w-3.5 h-3.5 text-[#CDCDCD] flex-shrink-0" />
                        <span className="truncate">{lead.email}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-[13px] text-[#8A8A8A]">
                    {lead.service || "-"}
                  </div>
                  <div>
                    <select
                      value={lead.status}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      disabled={updatingStatus === lead.id}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-[0.04em] cursor-pointer focus:outline-none appearance-none transition-colors duration-200",
                        STATUS_STYLES[lead.status] || STATUS_STYLES.new
                      )}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200",
                      expandedId === lead.id ? "bg-[#F2F0EC]" : "bg-transparent"
                    )}>
                      {expandedId === lead.id ? (
                        <ChevronUp className="w-4 h-4 text-[#8A8A8A]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#CDCDCD]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded detail */}
                {expandedId === lead.id && (
                  <div className="px-6 py-5 bg-[#FAFAF8] border-t border-[#F2F0EC] space-y-4">
                    {/* Message */}
                    {lead.message && (
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-[#ABABAB] font-semibold uppercase tracking-[0.06em] mb-2">
                          <MessageSquare className="w-3.5 h-3.5" />
                          Message
                        </div>
                        <p className="text-[13px] text-[#4A4A4A] leading-relaxed whitespace-pre-wrap bg-white rounded-xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                          {lead.message}
                        </p>
                      </div>
                    )}

                    {/* Source */}
                    <div className="text-[11px] text-[#CDCDCD] font-medium">
                      Source: <span className="text-[#8A8A8A]">{lead.source_page || "Unknown"}</span>
                    </div>

                    {/* Notes */}
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#ABABAB] font-semibold uppercase tracking-[0.06em] mb-2">
                        <StickyNote className="w-3.5 h-3.5" />
                        Admin Notes
                      </div>
                      <div className="flex gap-2.5">
                        <textarea
                          value={editingNotes[lead.id] ?? lead.notes ?? ""}
                          onChange={(e) =>
                            setEditingNotes((prev) => ({
                              ...prev,
                              [lead.id]: e.target.value,
                            }))
                          }
                          placeholder="Add notes about this lead..."
                          rows={2}
                          className="flex-1 px-4 py-3 bg-white rounded-xl text-[13px] text-[#1A1A1A] placeholder-[#CDCDCD] focus:outline-none focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] shadow-[0_1px_2px_rgba(0,0,0,0.03)] resize-none transition-shadow duration-300"
                        />
                        <button
                          onClick={() => saveNotes(lead.id)}
                          disabled={savingNotes === lead.id}
                          className="w-10 h-10 bg-gradient-to-br from-[#E31837] to-[#C91530] text-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(227,24,55,0.25)] hover:shadow-[0_4px_14px_rgba(227,24,55,0.35)] transition-all duration-300 self-end cursor-pointer disabled:opacity-50"
                        >
                          {savingNotes === lead.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="flex gap-2.5 pt-1">
                      {lead.phone && (
                        <a
                          href={`tel:${lead.phone}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1A1A1A] text-[12px] font-semibold rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#ABABAB]" />
                          Call
                        </a>
                      )}
                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1A1A1A] text-[12px] font-semibold rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#ABABAB]" />
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}

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

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-yellow-500/20 text-yellow-400",
  quoted: "bg-orange-500/20 text-orange-400",
  won: "bg-green-500/20 text-green-400",
  lost: "bg-[#3A3A3E] text-[#6B7280]",
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
      // Status filter
      if (filterStatus !== "all" && lead.status !== filterStatus) return false;

      // Search filter
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
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-white">Leads</h1>
            <p className="text-sm text-[#9CA3AF]">
              {filtered.length} of {leads.length} leads
            </p>
          </div>
          <a
            href="/api/admin/leads/export"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A2A2E] text-white text-sm rounded-lg hover:bg-[#3A3A3E] transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#2A2A2E] border border-[#3A3A3E] rounded-lg text-white text-sm placeholder-[#6B7280] focus:outline-none focus:border-[#E31837]"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 bg-[#2A2A2E] border border-[#3A3A3E] rounded-lg text-white text-sm focus:outline-none focus:border-[#E31837] cursor-pointer"
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
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-[#E31837] animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6B7280] text-sm">No leads found</p>
          </div>
        ) : (
          <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] overflow-hidden">
            {/* Desktop header */}
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_120px_100px] gap-4 px-4 py-3 text-xs font-medium text-[#6B7280] uppercase tracking-wide border-b border-[#2A2A2E]">
              <div>Date</div>
              <div>Name</div>
              <div>Contact</div>
              <div>Service</div>
              <div>Status</div>
              <div></div>
            </div>

            {/* Rows */}
            {filtered.map((lead) => (
              <div key={lead.id}>
                {/* Main row */}
                <div
                  onClick={() => toggleExpand(lead.id)}
                  className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_120px_100px] gap-2 md:gap-4 px-4 py-3 border-b border-[#2A2A2E] hover:bg-[#2A2A2E]/50 cursor-pointer transition-colors"
                >
                  <div className="text-sm text-[#9CA3AF]">
                    {new Date(lead.created_at).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="text-[#6B7280] ml-2 text-xs">
                      {new Date(lead.created_at).toLocaleTimeString("en-CA", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="text-sm text-white font-medium">
                    {lead.first_name} {lead.last_name}
                  </div>
                  <div className="text-sm text-[#9CA3AF] space-y-0.5">
                    {lead.phone && (
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3 h-3" />
                        {lead.phone}
                      </div>
                    )}
                    {lead.email && (
                      <div className="flex items-center gap-1.5 truncate">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{lead.email}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-[#9CA3AF]">
                    {lead.service || "-"}
                  </div>
                  <div>
                    <select
                      value={lead.status}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      disabled={updatingStatus === lead.id}
                      className={cn(
                        "px-2 py-1 rounded-md text-xs font-medium border-0 cursor-pointer focus:outline-none",
                        STATUS_COLORS[lead.status] || STATUS_COLORS.new
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
                    {expandedId === lead.id ? (
                      <ChevronUp className="w-4 h-4 text-[#6B7280]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                    )}
                  </div>
                </div>

                {/* Expanded detail */}
                {expandedId === lead.id && (
                  <div className="px-4 py-4 bg-[#111113] border-b border-[#2A2A2E] space-y-4">
                    {/* Message */}
                    {lead.message && (
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                          <MessageSquare className="w-3 h-3" />
                          Message
                        </div>
                        <p className="text-sm text-[#9CA3AF] whitespace-pre-wrap">
                          {lead.message}
                        </p>
                      </div>
                    )}

                    {/* Source */}
                    <div className="text-xs text-[#6B7280]">
                      Source: {lead.source_page || "Unknown"}
                    </div>

                    {/* Notes */}
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                        <StickyNote className="w-3 h-3" />
                        Admin Notes
                      </div>
                      <div className="flex gap-2">
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
                          className="flex-1 px-3 py-2 bg-[#2A2A2E] border border-[#3A3A3E] rounded-lg text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E31837] resize-none"
                        />
                        <button
                          onClick={() => saveNotes(lead.id)}
                          disabled={savingNotes === lead.id}
                          className="px-3 py-2 bg-[#E31837] text-white rounded-lg text-sm hover:bg-[#C21430] transition-colors self-end cursor-pointer disabled:opacity-50"
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
                    <div className="flex gap-2">
                      {lead.phone && (
                        <a
                          href={`tel:${lead.phone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2A2A2E] text-white text-xs rounded-lg hover:bg-[#3A3A3E] transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          Call
                        </a>
                      )}
                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2A2A2E] text-white text-xs rounded-lg hover:bg-[#3A3A3E] transition-colors"
                        >
                          <Mail className="w-3 h-3" />
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

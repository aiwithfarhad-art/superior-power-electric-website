"use client";

import { useState, useEffect } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { Loader2, Users, Eye, MousePointer, Send, TrendingUp, BarChart3 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface AnalyticsData {
  totalLeads: number;
  allTimeLeads: number;
  bySource: { name: string; count: number }[];
  byService: { name: string; count: number }[];
  byStatus: { name: string; count: number }[];
  funnel: { pageViews: number; formStarts: number; formSubmits: number };
  leadsPerDay: { date: string; count: number }[];
}

const CHART_COLORS = [
  "#E31837",
  "#3B82F6",
  "#F59E0B",
  "#10B981",
  "#8B5CF6",
  "#EC4899",
  "#6366F1",
  "#14B8A6",
];

const DATE_RANGES = [
  { label: "7 days", value: 7 },
  { label: "30 days", value: 30 },
  { label: "90 days", value: 90 },
];

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

  useEffect(() => {
    fetchData();
  }, [days]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/analytics?days=${days}`);
      if (res.ok) {
        setData(await res.json());
      }
    } catch {
      // Silent fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-[22px] font-bold text-[#1C1C1E] tracking-[-0.02em]">Analytics</h1>
            <p className="text-[13px] text-[#8A8A8A] mt-0.5">Lead activity and conversions</p>
          </div>
          <div className="flex gap-1 bg-white rounded-xl p-1 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]">
            {DATE_RANGES.map((range) => (
              <button
                key={range.value}
                onClick={() => setDays(range.value)}
                className={`px-4 py-2 text-[12px] font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  days === range.value
                    ? "bg-[#E31837] text-white shadow-[0_2px_8px_rgba(227,24,55,0.3)]"
                    : "text-[#8A8A8A] hover:text-[#1C1C1E] hover:bg-[#F6F5F2]"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-[#E31837] animate-spin" />
          </div>
        ) : data ? (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <StatCard
                icon={Users}
                label={`Leads (${days}d)`}
                value={data.totalLeads}
                accent="#E31837"
              />
              <StatCard
                icon={TrendingUp}
                label="All-time leads"
                value={data.allTimeLeads}
                accent="#3B82F6"
              />
              <StatCard
                icon={Eye}
                label="Page views"
                value={data.funnel.pageViews}
                accent="#8B5CF6"
              />
              <StatCard
                icon={Send}
                label="Form submits"
                value={data.funnel.formSubmits}
                accent="#10B981"
              />
            </div>

            {/* Conversion funnel */}
            <div className="bg-white rounded-2xl p-5 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em]">
                  Conversion Funnel
                </h2>
              </div>
              <div className="flex items-end gap-3 md:gap-5 h-36">
                {[
                  {
                    label: "Page Views",
                    value: data.funnel.pageViews,
                    icon: Eye,
                    color: "#3B82F6",
                    bgFrom: "from-blue-500/80",
                    bgTo: "to-blue-400/60",
                  },
                  {
                    label: "Form Starts",
                    value: data.funnel.formStarts,
                    icon: MousePointer,
                    color: "#F59E0B",
                    bgFrom: "from-amber-500/80",
                    bgTo: "to-amber-400/60",
                  },
                  {
                    label: "Submissions",
                    value: data.funnel.formSubmits,
                    icon: Send,
                    color: "#10B981",
                    bgFrom: "from-emerald-500/80",
                    bgTo: "to-emerald-400/60",
                  },
                ].map((step, i) => {
                  const max = Math.max(
                    data.funnel.pageViews,
                    data.funnel.formStarts,
                    data.funnel.formSubmits,
                    1
                  );
                  const height = Math.max((step.value / max) * 100, 10);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2.5">
                      <div className="flex items-center gap-1.5">
                        <step.icon className="w-3 h-3" style={{ color: step.color }} />
                        <span className="text-[#1C1C1E] font-bold text-[15px] tracking-[-0.02em]">
                          {step.value}
                        </span>
                      </div>
                      <div
                        className={`w-full rounded-xl bg-gradient-to-t ${step.bgFrom} ${step.bgTo} transition-all duration-500`}
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[#ABABAB] text-[11px] font-medium text-center">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Leads per day */}
              {data.leadsPerDay.length > 0 && (
                <div className="bg-white rounded-2xl p-5 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
                  <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em] mb-5">
                    Leads Per Day
                  </h2>
                  <div className="h-52">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.leadsPerDay}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#F2F0EC"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(d) =>
                            new Date(d).toLocaleDateString("en-CA", {
                              month: "short",
                              day: "numeric",
                            })
                          }
                          tick={{ fill: "#ABABAB", fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: "#ABABAB", fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                          allowDecimals={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#fff",
                            border: "none",
                            borderRadius: "12px",
                            color: "#1C1C1E",
                            fontSize: 12,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                            padding: "10px 14px",
                          }}
                        />
                        <Bar
                          dataKey="count"
                          fill="#E31837"
                          radius={[6, 6, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Leads by service (pie) */}
              {data.byService.length > 0 && (
                <div className="bg-white rounded-2xl p-5 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
                  <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em] mb-5">
                    Leads by Service
                  </h2>
                  <div className="h-52 flex items-center">
                    <div className="w-1/2 h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={data.byService}
                            dataKey="count"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={75}
                            innerRadius={40}
                            strokeWidth={0}
                          >
                            {data.byService.map((_, i) => (
                              <Cell
                                key={i}
                                fill={CHART_COLORS[i % CHART_COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#fff",
                              border: "none",
                              borderRadius: "12px",
                              color: "#1C1C1E",
                              fontSize: 12,
                              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                              padding: "10px 14px",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-1/2 space-y-2">
                      {data.byService.slice(0, 6).map((item, i) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-2.5 text-[12px]"
                        >
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm"
                            style={{
                              backgroundColor:
                                CHART_COLORS[i % CHART_COLORS.length],
                            }}
                          />
                          <span className="text-[#8A8A8A] truncate">
                            {item.name}
                          </span>
                          <span className="text-[#1C1C1E] font-bold ml-auto">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Source + Status row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* By source */}
              {data.bySource.length > 0 && (
                <div className="bg-white rounded-2xl p-5 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
                  <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em] mb-5">
                    Leads by Source Page
                  </h2>
                  <div className="space-y-4">
                    {data.bySource.map((item) => {
                      const max = Math.max(
                        ...data.bySource.map((s) => s.count)
                      );
                      const pct = (item.count / max) * 100;
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between text-[12px] mb-1.5">
                            <span className="text-[#8A8A8A] font-medium">{item.name}</span>
                            <span className="text-[#1C1C1E] font-bold">
                              {item.count}
                            </span>
                          </div>
                          <div className="h-2 bg-[#F2F0EC] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#E31837] to-[#FF4D6A] rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* By status */}
              {data.byStatus.length > 0 && (
                <div className="bg-white rounded-2xl p-5 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
                  <h2 className="text-[14px] font-bold text-[#1C1C1E] tracking-[-0.01em] mb-5">
                    Leads by Status
                  </h2>
                  <div className="space-y-4">
                    {data.byStatus.map((item) => {
                      const max = Math.max(
                        ...data.byStatus.map((s) => s.count)
                      );
                      const pct = (item.count / max) * 100;
                      const colorMap: Record<string, { from: string; to: string }> = {
                        new: { from: "#3B82F6", to: "#60A5FA" },
                        contacted: { from: "#F59E0B", to: "#FBBF24" },
                        quoted: { from: "#F97316", to: "#FB923C" },
                        won: { from: "#10B981", to: "#34D399" },
                      };
                      const colors = colorMap[item.name] || { from: "#9CA3AF", to: "#D1D5DB" };
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between text-[12px] mb-1.5">
                            <span className="text-[#8A8A8A] font-medium capitalize">
                              {item.name}
                            </span>
                            <span className="text-[#1C1C1E] font-bold">
                              {item.count}
                            </span>
                          </div>
                          <div className="h-2 bg-[#F2F0EC] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${pct}%`,
                                background: `linear-gradient(to right, ${colors.from}, ${colors.to})`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
            <BarChart3 className="w-8 h-8 text-[#CDCDCD] mx-auto mb-3" />
            <p className="text-[#8A8A8A] text-[14px]">
              No analytics data available
            </p>
          </div>
        )}
      </div>
    </AdminShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${accent}10` }}
        >
          <Icon className="w-4 h-4" style={{ color: accent }} />
        </div>
        <span className="text-[11px] text-[#ABABAB] font-semibold uppercase tracking-[0.06em]">{label}</span>
      </div>
      <p className="text-[28px] font-bold text-[#1C1C1E] tracking-[-0.03em] leading-none">{value.toLocaleString()}</p>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { Loader2, Users, Eye, MousePointer, Send } from "lucide-react";
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
            <h1 className="text-xl font-bold text-white">Analytics</h1>
            <p className="text-sm text-[#9CA3AF]">Lead activity and conversions</p>
          </div>
          <div className="flex gap-1 bg-[#2A2A2E] rounded-lg p-1">
            {DATE_RANGES.map((range) => (
              <button
                key={range.value}
                onClick={() => setDays(range.value)}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors cursor-pointer ${
                  days === range.value
                    ? "bg-[#E31837] text-white"
                    : "text-[#9CA3AF] hover:text-white"
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
              />
              <StatCard
                icon={Users}
                label="All-time leads"
                value={data.allTimeLeads}
              />
              <StatCard
                icon={Eye}
                label="Page views"
                value={data.funnel.pageViews}
              />
              <StatCard
                icon={Send}
                label="Form submits"
                value={data.funnel.formSubmits}
              />
            </div>

            {/* Conversion funnel */}
            <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-4 md:p-6">
              <h2 className="text-sm font-medium text-white mb-4">
                Conversion Funnel
              </h2>
              <div className="flex items-end gap-2 md:gap-4 h-32">
                {[
                  {
                    label: "Page Views",
                    value: data.funnel.pageViews,
                    icon: Eye,
                  },
                  {
                    label: "Form Starts",
                    value: data.funnel.formStarts,
                    icon: MousePointer,
                  },
                  {
                    label: "Submissions",
                    value: data.funnel.formSubmits,
                    icon: Send,
                  },
                ].map((step, i) => {
                  const max = Math.max(
                    data.funnel.pageViews,
                    data.funnel.formStarts,
                    data.funnel.formSubmits,
                    1
                  );
                  const height = Math.max((step.value / max) * 100, 8);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-white font-bold text-sm">
                        {step.value}
                      </span>
                      <div
                        className="w-full rounded-t-lg transition-all"
                        style={{
                          height: `${height}%`,
                          backgroundColor:
                            i === 0
                              ? "#3B82F6"
                              : i === 1
                                ? "#F59E0B"
                                : "#10B981",
                        }}
                      />
                      <span className="text-[#6B7280] text-xs text-center">
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
                <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-4 md:p-6">
                  <h2 className="text-sm font-medium text-white mb-4">
                    Leads Per Day
                  </h2>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.leadsPerDay}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#2A2A2E"
                        />
                        <XAxis
                          dataKey="date"
                          tickFormatter={(d) =>
                            new Date(d).toLocaleDateString("en-CA", {
                              month: "short",
                              day: "numeric",
                            })
                          }
                          tick={{ fill: "#6B7280", fontSize: 11 }}
                          axisLine={{ stroke: "#2A2A2E" }}
                        />
                        <YAxis
                          tick={{ fill: "#6B7280", fontSize: 11 }}
                          axisLine={{ stroke: "#2A2A2E" }}
                          allowDecimals={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#2A2A2E",
                            border: "1px solid #3A3A3E",
                            borderRadius: "8px",
                            color: "#fff",
                            fontSize: 12,
                          }}
                        />
                        <Bar
                          dataKey="count"
                          fill="#E31837"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Leads by service (pie) */}
              {data.byService.length > 0 && (
                <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-4 md:p-6">
                  <h2 className="text-sm font-medium text-white mb-4">
                    Leads by Service
                  </h2>
                  <div className="h-48 flex items-center">
                    <div className="w-1/2 h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={data.byService}
                            dataKey="count"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={70}
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
                              backgroundColor: "#2A2A2E",
                              border: "1px solid #3A3A3E",
                              borderRadius: "8px",
                              color: "#fff",
                              fontSize: 12,
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-1/2 space-y-1.5">
                      {data.byService.slice(0, 6).map((item, i) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-2 text-xs"
                        >
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor:
                                CHART_COLORS[i % CHART_COLORS.length],
                            }}
                          />
                          <span className="text-[#9CA3AF] truncate">
                            {item.name}
                          </span>
                          <span className="text-white font-medium ml-auto">
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
                <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-4 md:p-6">
                  <h2 className="text-sm font-medium text-white mb-4">
                    Leads by Source Page
                  </h2>
                  <div className="space-y-2">
                    {data.bySource.map((item) => {
                      const max = Math.max(
                        ...data.bySource.map((s) => s.count)
                      );
                      const pct = (item.count / max) * 100;
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#9CA3AF]">{item.name}</span>
                            <span className="text-white font-medium">
                              {item.count}
                            </span>
                          </div>
                          <div className="h-2 bg-[#2A2A2E] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#E31837] rounded-full"
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
                <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-4 md:p-6">
                  <h2 className="text-sm font-medium text-white mb-4">
                    Leads by Status
                  </h2>
                  <div className="space-y-2">
                    {data.byStatus.map((item) => {
                      const max = Math.max(
                        ...data.byStatus.map((s) => s.count)
                      );
                      const pct = (item.count / max) * 100;
                      const color =
                        item.name === "new"
                          ? "#3B82F6"
                          : item.name === "contacted"
                            ? "#F59E0B"
                            : item.name === "quoted"
                              ? "#F97316"
                              : item.name === "won"
                                ? "#10B981"
                                : "#6B7280";
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#9CA3AF] capitalize">
                              {item.name}
                            </span>
                            <span className="text-white font-medium">
                              {item.count}
                            </span>
                          </div>
                          <div className="h-2 bg-[#2A2A2E] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pct}%`,
                                backgroundColor: color,
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
          <div className="text-center py-20">
            <p className="text-[#6B7280] text-sm">
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
}: {
  icon: React.ElementType;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-[#1C1C1E] rounded-xl border border-[#2A2A2E] p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-[#E31837]" />
        <span className="text-xs text-[#6B7280]">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value.toLocaleString()}</p>
    </div>
  );
}

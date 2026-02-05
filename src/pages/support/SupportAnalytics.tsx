import { PageHeader } from "@/components/shared/PageHeader";
import { useState } from "react";
import { TabNavigation } from "@/components/shared/TabNavigation";
import { BarChart3, TrendingUp, Clock, CheckCircle, Percent, AlertCircle } from "lucide-react";

export default function SupportAnalytics() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "agents", label: "Agents" },
    { id: "sla", label: "SLA" },
    { id: "ai-chat", label: "AI Chat" },
    { id: "help-center", label: "Help Center" },
  ];

  const stats = [
    { label: "TOTAL TICKETS", value: 0, color: "text-foreground" },
    { label: "RESOLVED", value: 0, color: "text-success" },
    { label: "RESOLUTION RATE", value: "0%", color: "text-primary" },
    { label: "AVG RESPONSE", value: "0m", color: "text-foreground" },
    { label: "AVG RESOLUTION", value: "0h", color: "text-foreground" },
    { label: "SLA COMPLIANCE", value: "100%", color: "text-success" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Support Analytics"
          subtitle="Last 30 Days"
          backLink="/support"
          backLabel="Back to Support"
        />
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground">Dashboard</button>
          <select className="h-9 px-3 rounded-md border border-input bg-primary text-primary-foreground text-sm font-bold">
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>

      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "overview" && (
        <div className="space-y-4">
          {/* Stats Row - Compact */}
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-4 card-shadow">
                <span className={`text-2xl font-bold ${s.color}`}>{s.value}</span>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Grid - Compact */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4 card-shadow">
              <h3 className="text-xs font-bold text-foreground mb-2">Ticket Volume Trend</h3>
              <div className="h-24 flex items-center justify-center text-muted-foreground text-xs">Chart placeholder</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 card-shadow">
              <h3 className="text-xs font-bold text-foreground mb-2">By Status</h3>
              <div className="h-24 flex items-center justify-center text-muted-foreground text-xs">Chart placeholder</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 card-shadow">
              <h3 className="text-xs font-bold text-foreground mb-2">By Priority</h3>
              <div className="h-24 flex items-center justify-center text-muted-foreground text-xs">Chart placeholder</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 card-shadow">
              <h3 className="text-xs font-bold text-foreground mb-2">Top Categories</h3>
              <p className="text-xs text-muted-foreground text-center py-6">No category data</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 card-shadow">
              <h3 className="text-xs font-bold text-foreground mb-2">By Source</h3>
              <div className="h-24 flex items-center justify-center text-muted-foreground text-xs">Chart placeholder</div>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-card p-4 card-shadow flex items-center justify-between">
                <h3 className="text-xs font-bold text-foreground">Hourly Distribution</h3>
                <span className="text-[10px] text-muted-foreground">Peak hours</span>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 card-shadow flex items-center justify-between">
                <h3 className="text-xs font-bold text-foreground">Daily Distribution</h3>
                <span className="text-[10px] text-muted-foreground">Busiest days</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "agents" && (
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
             <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold text-foreground">Individual Agent Performance</h3>
            </div>
            <div className="p-20 text-center">
              <p className="text-sm text-muted-foreground">No agent data available for this period</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
             <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold text-foreground">Team Performance</h3>
            </div>
            <div className="p-8 space-y-8">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-primary">Cusmtomer support 1</h4>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center space-y-1">
                    <p className="text-3xl font-bold">0</p>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Tickets</p>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-3xl font-bold text-success">0</p>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Resolved</p>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-3xl font-bold text-destructive">0m</p>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Avg Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

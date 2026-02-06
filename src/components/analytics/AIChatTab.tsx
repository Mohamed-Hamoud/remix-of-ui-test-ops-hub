import { MessageSquare, TicketCheck, Heart } from "lucide-react";

const stats = [
  { label: "CONVERSATIONS", value: "7", color: "text-primary border-l-primary" },
  { label: "COMPLETED", value: "0", color: "text-success border-l-success" },
  { label: "ESCALATED", value: "0", color: "text-warning border-l-warning" },
  { label: "ESCALATION RATE", value: "0.0%", color: "text-warning border-l-warning" },
  { label: "TOKENS USED", value: "3,048", color: "text-foreground border-l-success" },
  { label: "TOTAL COST", value: "$0.00", color: "text-foreground border-l-success" },
];

const conversationStatuses = [
  { label: "Ended Successfully", count: 0, dotColor: "bg-success" },
  { label: "Escalated to Agent", count: 0, dotColor: "bg-warning" },
  { label: "Currently Active", count: 7, dotColor: "bg-primary" },
];

const conversationMetrics = [
  { icon: MessageSquare, label: "Average Turns", value: "1.3" },
  { icon: TicketCheck, label: "Tickets Created", value: "0" },
  { icon: Heart, label: "Avg Sentiment", value: "Neutral", extra: "(0)" },
];

const costDetails = [
  { label: "Total Tokens", value: "3,048" },
  { label: "Total Cost", value: "$0.0014" },
  { label: "Avg Cost/Conversation", value: "$0.0002" },
];

export function AIChatTab() {
  return (
    <div className="space-y-4">
      {/* Stats Row */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <div key={i} className={`rounded-lg border border-border bg-card p-4 card-shadow border-l-4 ${s.color.split(" ").slice(1).join(" ")}`}>
            <span className={`text-2xl font-bold ${s.color.split(" ")[0]}`}>{s.value}</span>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Token Usage Trend + Detected Intents */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Token Usage Trend</h3>
          </div>
          <div className="p-6 h-32 flex items-center justify-center text-muted-foreground text-xs">
            Chart placeholder
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Detected Intents</h3>
          </div>
          <div className="p-6 h-32 flex items-center justify-center text-muted-foreground text-xs">
            No intent data
          </div>
        </div>
      </div>

      {/* Conversation Metrics + Status + Cost Analysis */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Conversation Metrics */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Conversation Metrics</h3>
          </div>
          <div className="p-6 space-y-5">
            {conversationMetrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <m.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="text-lg font-bold text-foreground">
                    {m.value} {m.extra && <span className="text-sm font-normal text-muted-foreground">{m.extra}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversation Status */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Conversation Status</h3>
          </div>
          <div className="p-6 space-y-4">
            {conversationStatuses.map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${s.dotColor}`} />
                  <span className="text-sm text-foreground">{s.label}</span>
                </div>
                <span className="text-sm font-bold text-foreground">{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Analysis */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Cost Analysis</h3>
          </div>
          <div className="p-6 space-y-4">
            {costDetails.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{c.label}</span>
                <span className="text-sm font-bold text-foreground">{c.value}</span>
              </div>
            ))}
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">Using claude-3-haiku model</p>
              <p className="text-xs text-muted-foreground">Input: $0.25/1M tokens</p>
              <p className="text-xs text-muted-foreground">Output: $1.25/1M tokens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

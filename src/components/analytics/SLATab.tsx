import { Star } from "lucide-react";

const stats = [
  { label: "TOTAL TICKETS", value: "0", color: "text-foreground" },
  { label: "RESPONSE SLA", value: "100%", color: "text-success" },
  { label: "RESOLUTION SLA", value: "100%", color: "text-warning" },
  { label: "CSAT SCORE", value: "0%", color: "text-success" },
];

const ratingDistribution = [
  { stars: 5, count: 0 },
  { stars: 4, count: 0 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const csatInsights = [
  { emoji: "😊", label: "Satisfied Customers", detail: "0 ratings (4-5 stars)" },
  { emoji: "😐", label: "Neutral Customers", detail: "0 ratings (3 stars)" },
  { emoji: "😞", label: "Dissatisfied Customers", detail: "0 ratings (1-2 stars)" },
];

export function SLATab() {
  return (
    <div className="space-y-4">
      {/* Stats Row */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-4 card-shadow">
            <span className={`text-2xl font-bold ${s.color}`}>{s.value}</span>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* SLA Performance + Customer Satisfaction */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* SLA Performance */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">SLA Performance</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Response SLA</span>
                <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded">100%</span>
              </div>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: "100%" }} />
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span><span className="text-success font-medium">0</span> met</span>
                <span><span className="text-destructive font-medium">0</span> breached</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Resolution SLA</span>
                <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded">100%</span>
              </div>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: "100%" }} />
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span><span className="text-success font-medium">0</span> met</span>
                <span><span className="text-destructive font-medium">0</span> breached</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Customer Satisfaction</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-primary">0</p>
              <div className="flex items-center justify-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Based on 0 ratings</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground mb-2">Rating Distribution</h4>
              {ratingDistribution.map((r) => (
                <div key={r.stars} className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 w-16 justify-end">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-warning rounded-full" style={{ width: "0%" }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-6 text-right">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resolution Breakdown + CSAT Insights */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Resolution Breakdown</h3>
          </div>
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No resolution data available</p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">CSAT Insights</h3>
          </div>
          <div className="p-6 space-y-4">
            {csatInsights.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-lg">
                  {item.emoji}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

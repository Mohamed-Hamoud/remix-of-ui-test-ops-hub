const topStats = [
  { label: "ARTICLES", value: "1", bg: "bg-primary text-primary-foreground" },
  { label: "CATEGORIES", value: "4", bg: "bg-warning text-white" },
  { label: "VIEWS", value: "0", bg: "bg-success text-white" },
  { label: "SEARCHES", value: "0", bg: "bg-warning text-white" },
];

const ratioStats = [
  { label: "HELPFUL RATIO", value: "0%", color: "text-destructive" },
  { label: "NO RESULTS RATE", value: "0%", color: "text-foreground" },
];

const engagementMetrics = [
  { label: "Unique Viewers", value: "0" },
  { label: "Avg Time on Page", value: "0", unit: "seconds" },
  { label: "Scroll Completion", value: "0%" },
  { label: "Helpful", value: "0" },
  { label: "Not Helpful", value: "0" },
];

const searchMetrics = [
  { label: "Total Searches", value: "0" },
  { label: "With Results", value: "0" },
  { label: "No Results", value: "0" },
  { label: "Click-through Rate", value: "0%" },
  { label: "Ticket Conversion", value: "0%" },
];

export function HelpCenterTab() {
  return (
    <div className="space-y-4">
      {/* Colored Stat Cards */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {topStats.map((s, i) => (
          <div key={i} className={`rounded-lg p-5 text-center ${s.bg}`}>
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider mt-1 opacity-90">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Ratio Stats */}
      <div className="grid gap-3 grid-cols-2">
        {ratioStats.map((s, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-5 card-shadow text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Article Views Trend</h3>
          </div>
          <div className="p-6 h-28 flex items-center justify-center text-muted-foreground text-xs">
            Chart placeholder
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Views by Source</h3>
          </div>
          <div className="p-6 h-28 flex items-center justify-center text-muted-foreground text-xs">
            No source data available
          </div>
        </div>
      </div>

      {/* Engagement Metrics + Search Metrics */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Engagement Metrics</h3>
          </div>
          <div className="p-6 space-y-4">
            {engagementMetrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted" />
                <div>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="text-base font-bold text-foreground">
                    {m.value} {m.unit && <span className="text-xs font-normal text-muted-foreground">{m.unit}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Search Metrics</h3>
          </div>
          <div className="p-6 space-y-4">
            {searchMetrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted" />
                <div>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="text-base font-bold text-foreground">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Views by Platform */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden lg:w-1/2">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold text-foreground">Views by Platform</h3>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm text-muted-foreground">No platform data available</p>
        </div>
      </div>

      {/* Top Viewed Articles + Popular Searches */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Top Viewed Articles</h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-sm text-muted-foreground">No article views yet</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground">Popular Searches</h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-sm text-muted-foreground">No searches yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Ticket, Users, Grid3X3, ShieldCheck, MessageSquare, HelpCircle, BarChart3, Settings, Star, TrendingUp, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { EmptyState } from "@/components/shared/EmptyState";
import { useNavigate } from "react-router-dom";

const quickNavItems = [
  { icon: Ticket, label: "Tickets", color: "bg-primary text-primary-foreground", link: "/support/tickets" },
  { icon: Users, label: "Teams", color: "bg-info text-info-foreground", link: "/support/teams" },
  { icon: Grid3X3, label: "Categories", color: "bg-success text-success-foreground", link: "/support/categories" },
  { icon: ShieldCheck, label: "SLA Policies", color: "bg-warning text-warning-foreground", link: "/support/sla" },
  { icon: MessageSquare, label: "Canned Responses", color: "bg-secondary text-secondary-foreground", link: "/support/canned-responses" },
  { icon: HelpCircle, label: "Help Center", color: "bg-accent text-accent-foreground", link: "/support/help-center" },
  { icon: BarChart3, label: "Analytics", color: "bg-primary text-primary-foreground", link: "/support/analytics" },
  { icon: Settings, label: "Settings", color: "bg-muted text-muted-foreground", link: "/support/settings" },
];

const statsData = [
  { label: "Open Tickets", value: 0, icon: Ticket, color: "text-primary" },
  { label: "Unassigned", value: 0, icon: AlertTriangle, color: "text-warning" },
  { label: "Escalated", value: 0, icon: TrendingUp, color: "text-destructive" },
  { label: "Resolved Today", value: 0, icon: CheckCircle, color: "text-success" },
];

const slaPerformance = [
  { label: "Response SLA Breached", value: 0, highlight: true },
  { label: "Resolution SLA Breached", value: 0, highlight: true },
  { label: "Avg First Response", value: "0 min", highlight: false },
  { label: "Avg Resolution Time", value: "0 hrs", highlight: false },
];

const ticketVolume = [
  { label: "Today", value: 0 },
  { label: "This Week", value: 0 },
  { label: "This Month", value: 0 },
];

export default function Support() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Support Dashboard</h1>
          <p className="page-subtitle">Monitor and manage customer support operations</p>
        </div>
        <button 
          onClick={() => navigate("/support/tickets")}
          className="btn-primary"
        >
          <Ticket className="h-4 w-4 mr-2" />
          View All Tickets
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <div key={index} className="rounded-xl border border-border bg-card p-5 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
              <div className={`h-12 w-12 rounded-xl ${stat.color} bg-current/10 flex items-center justify-center`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="rounded-xl border border-border bg-card p-4 card-shadow">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
          {quickNavItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.link)}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className={`h-10 w-10 rounded-lg ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-foreground text-center">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* SLA Performance */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              SLA Performance
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {slaPerformance.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30">
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className={`text-sm font-bold ${item.highlight ? "text-destructive" : "text-foreground"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Star className="h-4 w-4 text-warning" />
              Customer Satisfaction
            </h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-5xl font-bold text-foreground mb-3">0.0</p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-muted fill-muted" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Based on 0 ratings (Last 30 days)</p>
          </div>
        </div>

        {/* Ticket Volume */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/5">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Ticket Volume
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {ticketVolume.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30">
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className="text-sm font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* SLA Breached */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/5 flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              SLA Breached Tickets
            </h3>
            <button 
              onClick={() => navigate("/support/tickets")}
              className="text-xs font-medium text-primary hover:underline"
            >
              View All
            </button>
          </div>
          <div className="p-8">
            <EmptyState title="No SLA breaches" description="All tickets are within SLA" variant="compact" />
          </div>
        </div>

        {/* Unassigned */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/5 flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Users className="h-4 w-4 text-warning" />
              Unassigned Tickets
            </h3>
            <button 
              onClick={() => navigate("/support/tickets")}
              className="text-xs font-medium text-primary hover:underline"
            >
              View All
            </button>
          </div>
          <div className="p-8">
            <EmptyState title="All tickets assigned" description="No unassigned tickets" variant="compact" />
          </div>
        </div>
      </div>

      {/* Recent Tickets */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-5 py-4 border-b border-border bg-muted/5 flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">Recent Tickets</h3>
          <button 
            onClick={() => navigate("/support/tickets")}
            className="text-xs font-medium text-primary hover:underline"
          >
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ticket</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priority</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="px-5 py-12">
                  <EmptyState 
                    icon={Ticket}
                    title="No recent tickets" 
                    description="New tickets will appear here"
                    variant="compact"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
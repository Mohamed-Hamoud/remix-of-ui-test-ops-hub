import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/shared/PageHeader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Bell, Star, Zap, Calendar, Bot, Send, Save, Users, MessageSquare } from "lucide-react";

export default function SupportSettings() {
  const [settings, setSettings] = useState({
    customerEmailEnabled: true,
    ticketCreated: true,
    agentReply: true,
    ticketResolved: true,
    ticketClosed: true,
    agentEmailEnabled: true,
    newTicket: true,
    customerReply: true,
    slaWarning: true,
    escalation: true,
    surveysEnabled: true,
    autoSendSurveys: true,
    delayHours: 24,
    sendReminder: true,
    reminderDays: 3,
    expiryDays: 7,
    realtimeEnabled: true,
    scheduledReportsEnabled: true,
    dailyReport: true,
    dailyReportTime: "07:00",
    weeklyReport: true,
    weeklyReportDay: "Monday",
    monthlyReport: true,
    aiEnabled: true,
    autoSuggest: true,
    sentimentAnalysis: true,
    testEmail: "admin@example.com",
  });

  const ToggleItem = ({ label, description, checked, onChange }: { 
    label: string; 
    description?: string;
    checked: boolean; 
    onChange: (v: boolean) => void 
  }) => (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="space-y-0.5">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );

  const NestedToggle = ({ label, checked, onChange }: { 
    label: string; 
    checked: boolean; 
    onChange: (v: boolean) => void 
  }) => (
    <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors">
      <span className="text-sm text-muted-foreground">{label}</span>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Support Settings"
        subtitle="Configure notification preferences and support system settings"
        backLink="/support"
        backLabel="Support"
        actions={
          <button className="btn-primary flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        }
      />

      {/* Notification Settings */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Customer Notifications */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Customer Notifications</h3>
              <p className="text-xs text-muted-foreground">Email alerts sent to customers</p>
            </div>
          </div>
          <div className="p-4">
            <ToggleItem
              label="Enable customer emails"
              checked={settings.customerEmailEnabled}
              onChange={(v) => setSettings({ ...settings, customerEmailEnabled: v })}
            />
            <div className="mt-2 space-y-1 border-l-2 border-primary/20 ml-1">
              <NestedToggle label="Ticket created confirmation" checked={settings.ticketCreated} onChange={(v) => setSettings({ ...settings, ticketCreated: v })} />
              <NestedToggle label="Agent reply notification" checked={settings.agentReply} onChange={(v) => setSettings({ ...settings, agentReply: v })} />
              <NestedToggle label="Ticket resolved notification" checked={settings.ticketResolved} onChange={(v) => setSettings({ ...settings, ticketResolved: v })} />
              <NestedToggle label="Ticket closed notification" checked={settings.ticketClosed} onChange={(v) => setSettings({ ...settings, ticketClosed: v })} />
            </div>
          </div>
        </div>

        {/* Agent Notifications */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-info/5 to-transparent flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-info/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-info" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Agent Notifications</h3>
              <p className="text-xs text-muted-foreground">Email alerts sent to support agents</p>
            </div>
          </div>
          <div className="p-4">
            <ToggleItem
              label="Enable agent emails"
              checked={settings.agentEmailEnabled}
              onChange={(v) => setSettings({ ...settings, agentEmailEnabled: v })}
            />
            <div className="mt-2 space-y-1 border-l-2 border-info/20 ml-1">
              <NestedToggle label="New ticket notification" checked={settings.newTicket} onChange={(v) => setSettings({ ...settings, newTicket: v })} />
              <NestedToggle label="Customer reply notification" checked={settings.customerReply} onChange={(v) => setSettings({ ...settings, customerReply: v })} />
              <NestedToggle label="SLA warning notification" checked={settings.slaWarning} onChange={(v) => setSettings({ ...settings, slaWarning: v })} />
              <NestedToggle label="Escalation notification" checked={settings.escalation} onChange={(v) => setSettings({ ...settings, escalation: v })} />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Customer Satisfaction */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-warning/5 to-transparent flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-warning/10 flex items-center justify-center">
              <Star className="h-4 w-4 text-warning" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Satisfaction Surveys</h3>
          </div>
          <div className="p-4 space-y-3">
            <ToggleItem label="Enable surveys" checked={settings.surveysEnabled} onChange={(v) => setSettings({ ...settings, surveysEnabled: v })} />
            <ToggleItem label="Auto-send after resolution" checked={settings.autoSendSurveys} onChange={(v) => setSettings({ ...settings, autoSendSurveys: v })} />
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <Label className="text-[10px] text-muted-foreground uppercase">Delay (hrs)</Label>
                <Input type="number" value={settings.delayHours} onChange={(e) => setSettings({ ...settings, delayHours: parseInt(e.target.value) || 0 })} className="h-8 text-sm" />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] text-muted-foreground uppercase">Remind (days)</Label>
                <Input type="number" value={settings.reminderDays} onChange={(e) => setSettings({ ...settings, reminderDays: parseInt(e.target.value) || 0 })} className="h-8 text-sm" />
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] text-muted-foreground uppercase">Expire (days)</Label>
                <Input type="number" value={settings.expiryDays} onChange={(e) => setSettings({ ...settings, expiryDays: parseInt(e.target.value) || 0 })} className="h-8 text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Real-time */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-success/5 to-transparent flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-success/10 flex items-center justify-center">
              <Zap className="h-4 w-4 text-success" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Real-time Notifications</h3>
          </div>
          <div className="p-4">
            <ToggleItem
              label="Enable WebSocket"
              description="Instant notifications without page refresh"
              checked={settings.realtimeEnabled}
              onChange={(v) => setSettings({ ...settings, realtimeEnabled: v })}
            />
          </div>
        </div>

        {/* AI Assistant */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-accent/20 to-transparent flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
              <Bot className="h-4 w-4 text-accent-foreground" />
            </div>
            <h3 className="text-sm font-bold text-foreground">AI Assistant</h3>
          </div>
          <div className="p-4">
            <ToggleItem label="Enable AI features" checked={settings.aiEnabled} onChange={(v) => setSettings({ ...settings, aiEnabled: v })} />
            <div className="mt-2 space-y-1 border-l-2 border-accent/30 ml-1">
              <NestedToggle label="Auto-suggest responses" checked={settings.autoSuggest} onChange={(v) => setSettings({ ...settings, autoSuggest: v })} />
              <NestedToggle label="Sentiment analysis" checked={settings.sentimentAnalysis} onChange={(v) => setSettings({ ...settings, sentimentAnalysis: v })} />
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-secondary/50 to-transparent flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center">
              <Calendar className="h-4 w-4 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Scheduled Reports</h3>
              <p className="text-xs text-muted-foreground">Automated performance reports</p>
            </div>
          </div>
          <Switch checked={settings.scheduledReportsEnabled} onCheckedChange={(v) => setSettings({ ...settings, scheduledReportsEnabled: v })} />
        </div>
        <div className="p-4">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Daily Report</span>
                <Switch checked={settings.dailyReport} onCheckedChange={(v) => setSettings({ ...settings, dailyReport: v })} />
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-xs text-muted-foreground">Time:</Label>
                <Input type="time" value={settings.dailyReportTime} onChange={(e) => setSettings({ ...settings, dailyReportTime: e.target.value })} className="h-8 w-24 text-sm" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Weekly Report</span>
                <Switch checked={settings.weeklyReport} onCheckedChange={(v) => setSettings({ ...settings, weeklyReport: v })} />
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-xs text-muted-foreground">Day:</Label>
                <Select value={settings.weeklyReportDay} onValueChange={(v) => setSettings({ ...settings, weeklyReportDay: v })}>
                  <SelectTrigger className="h-8 w-24 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Monthly Report</span>
                <Switch checked={settings.monthlyReport} onCheckedChange={(v) => setSettings({ ...settings, monthlyReport: v })} />
              </div>
              <p className="text-xs text-muted-foreground">Sent on the 1st of each month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Email */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-5 py-4 border-b border-border bg-muted/5 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <Send className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">Test Email Notifications</h3>
            <p className="text-xs text-muted-foreground">Verify your notification settings are working</p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-3">
          <Input
            type="email"
            value={settings.testEmail}
            onChange={(e) => setSettings({ ...settings, testEmail: e.target.value })}
            placeholder="admin@example.com"
            className="flex-1 h-10"
          />
          <button className="btn-secondary px-5 h-10 flex items-center gap-2">
            <Send className="h-4 w-4" />
            Send Test
          </button>
        </div>
      </div>
    </div>
  );
}
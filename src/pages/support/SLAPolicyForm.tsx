import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

export default function SLAPolicyForm() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="New SLA Policy"
        backLink="/support/sla"
        backLabel="Cancel"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Basic Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>Name <span className="text-destructive">*</span></Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea rows={3} />
              </div>
            </div>
          </div>

          {/* Response Times */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Response Times (minutes)</h3>
              <p className="text-xs text-muted-foreground mt-1">Time allowed for first agent response</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Urgent <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={15} />
                </div>
                <div className="space-y-2">
                  <Label>High <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={30} />
                </div>
                <div className="space-y-2">
                  <Label>Normal <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={60} />
                </div>
                <div className="space-y-2">
                  <Label>Low <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={240} />
                </div>
              </div>
            </div>
          </div>

          {/* Resolution Times */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Resolution Times (minutes)</h3>
              <p className="text-xs text-muted-foreground mt-1">Time allowed for full ticket resolution</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Urgent <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={120} />
                  <p className="text-[10px] text-muted-foreground">2.0 hours</p>
                </div>
                <div className="space-y-2">
                  <Label>High <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={480} />
                  <p className="text-[10px] text-muted-foreground">8.0 hours</p>
                </div>
                <div className="space-y-2">
                  <Label>Normal <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={1440} />
                  <p className="text-[10px] text-muted-foreground">24.0 hours</p>
                </div>
                <div className="space-y-2">
                  <Label>Low <span className="text-destructive">*</span></Label>
                  <Input type="number" defaultValue={2880} />
                  <p className="text-[10px] text-muted-foreground">48.0 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Escalation Settings */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Escalation Settings</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>Auto Escalate After (minutes)</Label>
                <Input type="number" defaultValue={60} />
              </div>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <Label>Enable auto-escalation on SLA breach</Label>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Business Hours</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Only count business hours (otherwise 24/7)</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <Label>Active</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Set as default policy</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <button onClick={() => navigate("/support/sla")} className="btn-ghost">Cancel</button>
        <button className="btn-primary px-8">Save Policy</button>
      </div>
    </div>
  );
}

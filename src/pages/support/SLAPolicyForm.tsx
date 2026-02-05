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

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="p-8 space-y-10">
          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Basic Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Name <span className="text-destructive">*</span></Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea rows={3} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Response Times (minutes)</h3>
              <p className="text-xs text-muted-foreground">Time allowed for first agent response</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          </section>

          <section className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Resolution Times (minutes)</h3>
              <p className="text-xs text-muted-foreground">Time allowed for full ticket resolution</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          </section>

          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Escalation Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2 max-w-xs">
                <Label>Auto Escalate After (minutes)</Label>
                <Input type="number" defaultValue={60} />
              </div>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <Label>Enable auto-escalation on SLA breach</Label>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Business Hours</h3>
            <div className="space-y-6">
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
          </section>

          <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
            <button onClick={() => navigate("/support/sla")} className="btn-ghost">Cancel</button>
            <button className="btn-primary px-8">Save Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

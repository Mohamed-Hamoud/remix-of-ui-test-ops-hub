import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

const variables = [
  "CUSTOMER_NAME", "CUSTOMER_EMAIL", "CUSTOMER_PHONE", "ORDER_ID", "ORDER_TOTAL",
  "ORDER_DATE", "RESTAURANT_NAME", "TICKET_NUMBER", "AGENT_NAME"
];

export default function CannedResponseForm() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="New Canned Response"
        backLink="/support/canned-responses"
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
                <Label>Title <span className="text-destructive">*</span></Label>
                <Input placeholder="e.g., Refund Confirmation" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Shortcut</Label>
                  <Input placeholder="e.g., #refund" />
                  <p className="text-[11px] text-muted-foreground">Type this to insert quickly</p>
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>General</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Settings</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Personal response (only visible to me)</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <Label>Active</Label>
              </div>
              <div className="space-y-2 max-w-xs">
                <Label>Position</Label>
                <Input type="number" defaultValue={0} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Response Content */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Response Content</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-lg bg-info/10 border border-info/20">
                <div className="text-[13px] text-info font-medium mb-2">
                  Available Variables:
                </div>
                <div className="flex flex-wrap gap-2">
                  {variables.map(v => (
                    <code key={v} className="px-2 py-0.5 rounded border border-info/30 bg-card text-[10px] text-info font-bold">
                      {"{{"}{v}{"}}"}
                    </code>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Response (English) <span className="text-destructive">*</span></Label>
                <Textarea placeholder="Enter your response template in English..." rows={5} />
              </div>
              <div className="space-y-2">
                <Label>Response (Malaysia) <span className="text-destructive">*</span></Label>
                <Textarea placeholder="Enter your response template in Malay..." rows={5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <button onClick={() => navigate("/support/canned-responses")} className="btn-ghost">Cancel</button>
        <button className="btn-primary px-8">Save Response</button>
      </div>
    </div>
  );
}

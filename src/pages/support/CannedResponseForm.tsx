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

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="p-8 space-y-10">
          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Basic Information</h3>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label>Title <span className="text-destructive">*</span></Label>
                <Input placeholder="e.g., Refund Confirmation" />
              </div>
              <div className="space-y-2">
                <Label>Shortcut</Label>
                <Input placeholder="e.g., #refund" />
                <p className="text-[11px] text-muted-foreground">Type this shortcut to quickly insert the response</p>
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>General</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Response Content</h3>
            <div className="p-4 rounded-lg bg-info/10 border border-info/20 flex flex-wrap gap-x-6 gap-y-3">
              <div className="text-[13px] text-info font-medium">
                Available Variables: <span className="text-info/80 font-normal">You can use these placeholders in your responses. They will be replaced with actual values when used.</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {variables.map(v => (
                  <code key={v} className="px-2 py-0.5 rounded border border-info/30 bg-card text-[10px] text-info font-bold">
                    {"{{"}{v}{"}}"}
                  </code>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Response (English) <span className="text-destructive">*</span></Label>
                <Textarea placeholder="Enter your response template in English..." rows={6} />
              </div>
              <div className="space-y-2">
                <Label>Response (Malaysia) <span className="text-destructive">*</span></Label>
                <Textarea placeholder="Enter your response template in Malay..." rows={6} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Settings</h3>
            <div className="grid gap-6">
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
          </section>

          <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
            <button onClick={() => navigate("/support/canned-responses")} className="btn-ghost">Cancel</button>
            <button className="btn-primary px-8">Save Response</button>
          </div>
        </div>
      </div>
    </div>
  );
}

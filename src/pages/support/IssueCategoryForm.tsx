import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

export default function IssueCategoryForm() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="New Issue Category"
        backLink="/support/categories"
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
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name (English) <span className="text-destructive">*</span></Label>
                  <Input placeholder="e.g., Refund" />
                </div>
                <div className="space-y-2">
                  <Label>Name (Malaysia) <span className="text-destructive">*</span></Label>
                  <Input placeholder="e.g., Bayaran Balik" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Description (English)</Label>
                  <Textarea rows={3} />
                </div>
                <div className="space-y-2">
                  <Label>Description (Malaysia)</Label>
                  <Textarea rows={3} />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Parent Category</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>None (Root Category)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Icon</Label>
                  <Input placeholder="e.g., fa-question-circle" />
                </div>
              </div>
            </div>
          </div>

          {/* SLA Settings */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">SLA Settings</h3>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Response Time (minutes)</Label>
                  <Input type="number" defaultValue={60} />
                </div>
                <div className="space-y-2">
                  <Label>Resolution Time (minutes)</Label>
                  <Input type="number" defaultValue={1440} />
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Status</h3>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <Label>Status</Label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Auto Resolution */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Auto Resolution</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Enable Auto Resolution</Label>
              </div>
              <div className="space-y-2">
                <Label>Auto resolution type</Label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Select type...</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Max Refund Amount (RM)</Label>
                  <Input type="number" defaultValue={0} />
                </div>
                <div className="space-y-2">
                  <Label>Max Credit Amount (RM)</Label>
                  <Input type="number" defaultValue={0} />
                </div>
              </div>
            </div>
          </div>

          {/* Bot Settings */}
          <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Bot Settings</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Bot can handle this category</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Requires order</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch />
                <Label>Requires photo evidence</Label>
              </div>
              <div className="space-y-2">
                <Label>Bot Initial Message (EN)</Label>
                <Textarea rows={3} />
              </div>
              <div className="space-y-2">
                <Label>Bot Initial Message (MS)</Label>
                <Textarea rows={3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <button onClick={() => navigate("/support/categories")} className="btn-ghost">Cancel</button>
        <button className="btn-primary px-8">Save Category</button>
      </div>
    </div>
  );
}

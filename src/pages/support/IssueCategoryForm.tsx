import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useParams } from "react-router-dom";

export default function IssueCategoryForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  return (
    <div className="space-y-6">
      <PageHeader
        title={isEditing ? "Edit Issue Category" : "New Issue Category"}
        backLink="/support/categories"
        backLabel="Cancel"
      />

      {/* Basic Information */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Basic Information</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name (English) <span className="text-destructive">*</span></Label>
              <Input placeholder="e.g., Refund Request" />
            </div>
            <div className="space-y-2">
              <Label>Name (Malaysia) <span className="text-destructive">*</span></Label>
              <Input placeholder="e.g., Permintaan Bayaran Balik" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Description (English)</Label>
              <Textarea rows={4} placeholder="Describe what this category covers..." />
            </div>
            <div className="space-y-2">
              <Label>Description (Malaysia)</Label>
              <Textarea rows={4} placeholder="Terangkan apa yang diliputi kategori ini..." />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
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
          </div>
          <div className="space-y-2">
            <Label>Icon</Label>
            <Input placeholder="e.g., fa-question-circle" />
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

      {/* Auto Resolution */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Auto Resolution</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="autoResolution" />
              <Label htmlFor="autoResolution" className="font-normal cursor-pointer">Enable Auto Resolution</Label>
            </div>
            <div className="space-y-2">
              <Label>Auto resolution type</Label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option value="">Select type...</option>
                <option value="refund">Refund</option>
                <option value="credit">Credit</option>
                <option value="replacement">Replacement</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Max Refund Amount (RM)</Label>
              <Input type="number" step="0.01" defaultValue="0.0" />
            </div>
            <div className="space-y-2">
              <Label>Max Credit Amount (RM)</Label>
              <Input type="number" step="0.01" defaultValue="0.0" />
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
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="botHandle" />
              <Label htmlFor="botHandle" className="font-normal cursor-pointer">Bot can handle this category</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="requiresOrder" />
              <Label htmlFor="requiresOrder" className="font-normal cursor-pointer">Requires order</Label>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="requiresPhoto" />
            <Label htmlFor="requiresPhoto" className="font-normal cursor-pointer">Requires photo evidence</Label>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Bot Initial Message (EN)</Label>
              <Textarea rows={4} placeholder="Initial message shown to users in English..." />
            </div>
            <div className="space-y-2">
              <Label>Bot Initial Message (MS)</Label>
              <Textarea rows={4} placeholder="Mesej awal yang ditunjukkan kepada pengguna..." />
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
          <select className="w-full sm:w-48 h-10 px-3 rounded-md border border-input bg-background">
            <option>Active</option>
            <option>Inactive</option>
          </select>
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

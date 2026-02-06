import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";

export default function HelpCenterCategoryForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  return (
    <div className="space-y-6">
      <PageHeader
        title={isEditing ? "Edit Help Category" : "New Help Category"}
        backLink="/support/help-center"
        backLabel="Cancel"
      />

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Basic Information</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name (English) <span className="text-destructive">*</span></Label>
              <Input placeholder="e.g., Account & App Issues" />
            </div>
            <div className="space-y-2">
              <Label>Name (Malay) <span className="text-destructive">*</span></Label>
              <Input placeholder="e.g., Akaun & Isu Aplikasi" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Description (English)</Label>
              <Textarea rows={4} placeholder="Describe what this category covers..." />
            </div>
            <div className="space-y-2">
              <Label>Description (Malay)</Label>
              <Textarea rows={4} placeholder="Terangkan apa yang diliputi kategori ini..." />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Icon</Label>
              <Input placeholder="e.g., fa-user-circle" />
            </div>
            <div className="space-y-2">
              <Label>Position</Label>
              <Input type="number" defaultValue={0} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <button onClick={() => navigate("/support/help-center")} className="btn-ghost">Cancel</button>
        <button className="btn-primary px-8">Save Category</button>
      </div>
    </div>
  );
}

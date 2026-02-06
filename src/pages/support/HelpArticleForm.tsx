import { PageHeader } from "@/components/shared/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function HelpArticleForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const isEditing = Boolean(id);

  return (
    <div className="space-y-6">
      <PageHeader
        title={isEditing ? "Edit Help Article" : "New Help Article"}
        subtitle={isEditing ? "Edite Accounts" : undefined}
        backLink={categoryId ? `/support/help-center/categories/${categoryId}` : "/support/help-center"}
        backLabel="Cancel"
      />

      {/* Article Information */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Article Information</h3>
        </div>
        <div className="p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category <span className="text-destructive">*</span></Label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option value="">Select category...</option>
                <option value="1">Account & App Issues</option>
                <option value="2">Order Issues</option>
                <option value="3">Payments & Refunds</option>
                <option value="4">Delivery & Tracking</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input placeholder="auto-generated-from-title" />
              <p className="text-xs text-muted-foreground">Leave blank to auto-generate from title</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content (English) */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Content (English)</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <Label>Title (English) <span className="text-destructive">*</span></Label>
            <Input placeholder="Article title in English" />
          </div>
          <div className="space-y-2">
            <Label>Summary (English)</Label>
            <Textarea rows={3} placeholder="Short summary for article listings" />
          </div>
          <div className="space-y-2">
            <Label>Content (English) <span className="text-destructive">*</span></Label>
            <Textarea rows={8} placeholder="Full article content..." />
          </div>
        </div>
      </div>

      {/* Content (Malay) */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Content (Malay)</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <Label>Title (Malay) <span className="text-destructive">*</span></Label>
            <Input placeholder="Tajuk artikel dalam Bahasa Melayu" />
          </div>
          <div className="space-y-2">
            <Label>Summary (Malay)</Label>
            <Textarea rows={3} placeholder="Ringkasan pendek untuk senarai artikel" />
          </div>
          <div className="space-y-2">
            <Label>Content (Malay) <span className="text-destructive">*</span></Label>
            <Textarea rows={8} placeholder="Kandungan artikel penuh..." />
          </div>
        </div>
      </div>

      {/* Publishing Options */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Publishing Options</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="publish" />
              <Label htmlFor="publish" className="font-normal cursor-pointer">Publish immediately</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="featured" />
              <Label htmlFor="featured" className="font-normal cursor-pointer">Feature this article</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="pinned" />
              <Label htmlFor="pinned" className="font-normal cursor-pointer">Pin to top</Label>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Position</Label>
              <Input type="number" defaultValue={0} />
            </div>
            <div className="space-y-2">
              <Label>Keywords</Label>
              <Input placeholder="keyword1, keyword2, keyword3" />
              <p className="text-xs text-muted-foreground">Comma-separated keywords for search</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">SEO (Optional)</h3>
        </div>
        <div className="p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Meta title</Label>
              <Input placeholder="SEO title" />
            </div>
            <div className="space-y-2">
              <Label>Meta description</Label>
              <Textarea rows={2} placeholder="SEO description" />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <button onClick={() => navigate(-1)} className="btn-ghost">Cancel</button>
        <button className="btn-primary px-8">Save Article</button>
      </div>
    </div>
  );
}

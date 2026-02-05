import { Plus, Edit, Trash2, ListTree } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "@/components/shared/EmptyState";

export default function IssueCategories() {
  const navigate = useNavigate();
  const [categories] = useState([]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Issue Categories"
        backLink="/support"
        backLabel="Back to Support"
        actions={
          <button 
            onClick={() => navigate("/support/categories/new")}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="h-4 w-4" /> Add Category
          </button>
        }
      />

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="section-title">Categories</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 text-left">Position</th>
                <th className="px-6 py-4 text-left">Name (EN)</th>
                <th className="px-6 py-4 text-left">Name (MS)</th>
                <th className="px-6 py-4 text-left">Priority</th>
                <th className="px-6 py-4 text-left">Auto Resolution</th>
                <th className="px-6 py-4 text-left">Bot</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-20">
                    <EmptyState
                      icon={ListTree}
                      title="No categories found"
                      description="Click the button above to create your first category"
                    />
                  </td>
                </tr>
              ) : (
                categories.map((cat: any) => (
                  <tr key={cat.id}>
                    {/* ... cat rows */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

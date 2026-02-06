import { Plus, Search, Filter, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EmptyState } from "@/components/shared/EmptyState";

export default function CannedResponses() {
  const navigate = useNavigate();
  const [responses] = useState([]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Canned Responses"
        backLink="/support"
        backLabel="Back to Support"
        actions={
          <button 
            onClick={() => navigate("/support/canned-responses/new")}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="h-4 w-4" /> Add Response
          </button>
        }
      />

      {/* Filters */}
      <div className="rounded-xl border border-border bg-card card-shadow p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Title or shortcut..." className="pl-9 h-9 bg-background" />
          </div>
          <select className="h-9 px-3 rounded-md border border-input bg-background text-foreground text-sm min-w-[150px]">
            <option>All Categories</option>
          </select>
          <div className="h-5 w-px bg-border hidden sm:block" />
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <Checkbox />
            <span className="text-muted-foreground text-xs">Shared only</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <Checkbox />
            <span className="text-muted-foreground text-xs">My responses</span>
          </label>
          <button className="btn-primary h-9 px-4 text-sm flex items-center gap-2">
            <Filter className="h-3.5 w-3.5" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="section-title">Responses</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 text-left">Position</th>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Shortcut</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Type</th>
                <th className="px-6 py-4 text-left">Usage</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {responses.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-20">
                    <EmptyState
                      icon={MessageSquare}
                      title="No canned responses found"
                      description="Create template responses to quickly answer common questions"
                    />
                  </td>
                </tr>
              ) : (
                responses.map((res: any) => (
                  <tr key={res.id}>
                    {/* res rows */}
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

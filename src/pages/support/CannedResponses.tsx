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

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="p-6">
          <div className="flex flex-wrap items-end gap-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</Label>
              <select className="w-44 h-10 px-3 rounded-md border border-input bg-background">
                <option>All Categories</option>
              </select>
            </div>
            <div className="space-y-2 flex-1 max-w-sm">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Search</Label>
              <Input placeholder="Title or shortcut..." />
            </div>
            <div className="flex items-center gap-6 pb-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <Checkbox />
                <span className="text-muted-foreground">Shared only</span>
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <Checkbox />
                <span className="text-muted-foreground">My responses</span>
              </label>
              <button className="btn-primary btn-sm px-4">Filter</button>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="px-6 py-4 bg-muted/10">
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
    </div>
  );
}

import { Plus, Edit, Trash2, Users } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useState } from "react";
import { DeleteModal } from "@/components/shared/FormModal";

const mockTeams = [
  {
    id: 1,
    name: "Customer support 1",
    members: 0,
    openTickets: 0,
    workload: 0,
    autoAssign: true,
    status: "ACTIVE",
  },
];

export default function SupportTeams() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Support Teams"
        actions={
          <button className="btn-primary flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add Team
          </button>
        }
      />

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="section-title">Teams</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Members</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Open Tickets</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Workload</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Auto Assign</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockTeams.map((team) => (
                <tr key={team.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">{team.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="avatar-circle-sm bg-primary/10 text-primary">{team.members}</span>
                      <span className="text-sm text-muted-foreground">members</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">{team.openTickets}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden min-w-[100px]">
                        <div className="h-full bg-primary" style={{ width: `${team.workload}%` }} />
                      </div>
                      <span className="text-sm text-muted-foreground">{team.workload}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`badge-success px-2 py-0.5 text-[10px]`}>
                      {team.autoAssign ? "YES" : "NO"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="badge-success px-2 py-0.5 text-[10px]">
                      {team.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-muted-foreground hover:text-foreground p-1 transition-colors">
                        Edit
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedTeam(team);
                          setDeleteModalOpen(true);
                        }}
                        className="btn-destructive btn-sm px-3 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={() => setDeleteModalOpen(false)}
        itemName={selectedTeam?.name}
      />
    </div>
  );
}

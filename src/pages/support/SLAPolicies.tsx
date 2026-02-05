import { Plus, Trash2, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "@/components/shared/FormModal";

const mockPolicies = [
  {
    id: 1,
    name: "test",
    responseTimes: { urgent: 15, high: 30, normal: 60, low: 240 },
    resolutionTimes: { urgent: 120, high: 480, normal: 1440, low: 2880 },
    businessHours: true,
    isDefault: false,
    status: "ACTIVE",
  },
];

export default function SLAPolicies() {
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);

  return (
    <div className="space-y-6">
      <PageHeader
        title="SLA Policies"
        backLink="/support"
        backLabel="Back to Support"
        actions={
          <button 
            onClick={() => navigate("/support/sla/new")}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="h-4 w-4" /> Add Policy
          </button>
        }
      />

      <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="section-title">Policies</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Response Times (min)</th>
                <th className="px-6 py-4 text-left">Resolution Times (min)</th>
                <th className="px-6 py-4 text-left">Business Hours</th>
                <th className="px-6 py-4 text-left">Default</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockPolicies.map((policy) => (
                <tr key={policy.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-foreground">{policy.name}</td>
                  <td className="px-6 py-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                      <span className="text-muted-foreground">Urgent:</span> <span className="font-bold">{policy.responseTimes.urgent}</span>
                      <span className="text-muted-foreground">High:</span> <span className="font-bold">{policy.responseTimes.high}</span>
                      <span className="text-muted-foreground">Normal:</span> <span className="font-bold">{policy.responseTimes.normal}</span>
                      <span className="text-muted-foreground">Low:</span> <span className="font-bold">{policy.responseTimes.low}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                      <span className="text-muted-foreground">Urgent:</span> <span className="font-bold">{policy.resolutionTimes.urgent}</span>
                      <span className="text-muted-foreground">High:</span> <span className="font-bold">{policy.resolutionTimes.high}</span>
                      <span className="text-muted-foreground">Normal:</span> <span className="font-bold">{policy.resolutionTimes.normal}</span>
                      <span className="text-muted-foreground">Low:</span> <span className="font-bold">{policy.resolutionTimes.low}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-info/10 text-info text-[10px] font-bold border border-info/20 uppercase">
                      {policy.businessHours ? "YES" : "NO"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[11px] text-muted-foreground hover:text-primary underline">
                      {policy.isDefault ? "Default" : "Set Default"}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <span className="badge-success px-2 py-0.5 text-[10px]">
                      {policy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-[11px] text-muted-foreground hover:text-foreground">Edit</button>
                      <button 
                        onClick={() => {
                          setSelectedPolicy(policy);
                          setDeleteModalOpen(true);
                        }}
                        className="btn-destructive btn-sm"
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
        itemName={selectedPolicy?.name}
      />
    </div>
  );
}

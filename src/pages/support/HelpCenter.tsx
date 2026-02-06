import { Plus, Eye } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface HelpCategory {
  id: string;
  position: number;
  nameEn: string;
  nameMs: string;
  articlesCount: number;
  publishedCount: number;
  status: "active" | "inactive";
}

const mockCategories: HelpCategory[] = [
  { id: "1", position: 1, nameEn: "Account & App Issues", nameMs: "Akaun & Isu Aplikasi", articlesCount: 1, publishedCount: 1, status: "active" },
  { id: "2", position: 2, nameEn: "Order Issues", nameMs: "Isu Pesanan", articlesCount: 0, publishedCount: 0, status: "active" },
  { id: "3", position: 3, nameEn: "Payments & Refunds", nameMs: "Pembayaran & Bayaran Balik", articlesCount: 0, publishedCount: 0, status: "active" },
  { id: "4", position: 4, nameEn: "Delivery & Tracking", nameMs: "Penghantaran & Penjejakan", articlesCount: 0, publishedCount: 0, status: "active" },
];

export default function HelpCenter() {
  const navigate = useNavigate();
  const [categories] = useState<HelpCategory[]>(mockCategories);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Help Center Categories"
        backLink="/support"
        backLabel="Back to Support"
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/support/help-center/preview")}
              className="btn-ghost flex items-center gap-2"
            >
              <Eye className="h-4 w-4" /> Preview Mobile
            </button>
            <button
              onClick={() => navigate("/support/help-center/categories/new")}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" /> Add Category
            </button>
          </div>
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
                <th className="px-6 py-4 text-left w-24">Position</th>
                <th className="px-6 py-4 text-left">Name (EN)</th>
                <th className="px-6 py-4 text-left">Name (MS)</th>
                <th className="px-6 py-4 text-left">Articles</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-right w-48"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground">
                    <span className="text-muted-foreground/50">::</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-foreground">{cat.nameEn}</td>
                  <td className="px-6 py-4 text-muted-foreground">{cat.nameMs}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {cat.articlesCount}
                      </span>
                      <span className="text-sm text-muted-foreground">({cat.publishedCount} published)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={cat.status === "active" ? "default" : "secondary"} className={cat.status === "active" ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0" : ""}>
                      {cat.status.toUpperCase()}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => navigate(`/support/help-center/categories/${cat.id}`)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        View
                      </button>
                      <button
                        onClick={() => navigate(`/support/help-center/categories/${cat.id}/edit`)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Edit
                      </button>
                      <button className="btn-destructive text-xs px-3 py-1.5">
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
    </div>
  );
}

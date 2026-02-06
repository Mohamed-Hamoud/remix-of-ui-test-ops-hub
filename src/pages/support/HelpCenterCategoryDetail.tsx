import { Plus, Edit } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: string;
  title: string;
  views: number;
  helpfulPercent: number;
  status: "published" | "draft";
}

const mockCategory = {
  id: "1",
  nameEn: "Account & App Issues",
  nameMs: "Akaun & Isu Aplikasi",
  icon: null,
  descriptionEn: "Help with login issues, verification codes, phone number changes, and app errors.",
  descriptionMs: "Bantuan untuk masalah log masuk, kod pengesahan, pertukaran nombor telefon, dan ralat aplikasi.",
  status: "active" as const,
};

const mockArticles: Article[] = [
  { id: "1", title: "Edite Accounts", views: 0, helpfulPercent: 0, status: "published" },
];

export default function HelpCenterCategoryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <PageHeader
        title={mockCategory.nameEn}
        backLink="/support/help-center"
        backLabel="Help Categories"
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(`/support/help-center/categories/${id}/edit`)}
              className="btn-ghost flex items-center gap-2"
            >
              <Edit className="h-4 w-4" /> Edit
            </button>
            <button
              onClick={() => navigate(`/support/help-center/articles/new?category=${id}`)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" /> Add Article
            </button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Category Details */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="section-title">Category Details</h2>
          </div>
          <div className="p-6">
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm text-muted-foreground">Name (EN)</dt>
                <dd className="text-sm font-medium text-foreground text-right">{mockCategory.nameEn}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-muted-foreground">Name (MS)</dt>
                <dd className="text-sm font-medium text-foreground text-right">{mockCategory.nameMs}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-muted-foreground">Icon</dt>
                <dd className="text-sm text-muted-foreground text-right">{mockCategory.icon || "No icon set"}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-sm text-muted-foreground shrink-0">Description (EN)</dt>
                <dd className="text-sm text-foreground text-right">{mockCategory.descriptionEn}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="text-sm text-muted-foreground shrink-0">Description (MS)</dt>
                <dd className="text-sm text-foreground text-right">{mockCategory.descriptionMs}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-sm text-muted-foreground">Status</dt>
                <dd>
                  <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0">
                    ACTIVE
                  </Badge>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Articles */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="section-title">Articles ({mockArticles.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Views</th>
                  <th className="px-6 py-3 text-left">Helpful</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockArticles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                      No articles yet. Click "Add Article" to create one.
                    </td>
                  </tr>
                ) : (
                  mockArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{article.title}</td>
                      <td className="px-6 py-4 text-muted-foreground">{article.views}</td>
                      <td className="px-6 py-4 text-muted-foreground">{article.helpfulPercent} %</td>
                      <td className="px-6 py-4">
                        <Badge className={article.status === "published" ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0" : "bg-muted text-muted-foreground"}>
                          {article.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => navigate(`/support/help-center/articles/${article.id}/edit`)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Edit
                        </button>
                      </td>
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

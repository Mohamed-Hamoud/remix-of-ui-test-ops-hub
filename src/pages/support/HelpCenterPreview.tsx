import { PageHeader } from "@/components/shared/PageHeader";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { MessageCircle, FileText, Headphones } from "lucide-react";

export default function HelpCenterPreview() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Help Center Preview"
        subtitle="Preview how the Help Center appears to customers on mobile (Grab-style)"
        backLink="/support/help-center"
        backLabel="Back to Help Center"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Settings Panel */}
        <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="section-title">Preview Settings</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <Label>Language</Label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option value="en">English</option>
                <option value="ms">Bahasa Melayu</option>
              </select>
            </div>

            <div>
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Current View</Label>
              <p className="mt-1 text-lg font-semibold">Help Center Home</p>
            </div>

            <div>
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Statistics</Label>
              <div className="mt-2 space-y-1 text-sm">
                <p><span className="font-semibold">Categories:</span> 4</p>
                <p><span className="font-semibold">Published Articles:</span> 1</p>
                <p><span className="font-semibold">Featured Articles:</span> 0</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <button
                onClick={() => navigate("/support/help-center")}
                className="w-full text-sm text-muted-foreground hover:text-foreground text-right transition-colors"
              >
                Manage Categories →
              </button>
              <button
                onClick={() => navigate("/support/help-center")}
                className="w-full text-sm text-muted-foreground hover:text-foreground text-right transition-colors"
              >
                Manage Articles →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Preview */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[680px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-2xl z-10" />
            
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
              {/* Status Bar */}
              <div className="h-12 bg-primary flex items-center justify-between px-6 pt-2">
                <span className="text-xs text-primary-foreground/80">10:05</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-primary-foreground/60 rounded-sm" />
                  <div className="w-4 h-2 bg-primary-foreground/60 rounded-sm" />
                </div>
              </div>

              {/* Header */}
              <div className="h-12 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">Help Centre</span>
              </div>

              {/* Content */}
              <div className="bg-primary px-4 pb-4">
                {/* User Card */}
                <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-4 flex items-center gap-3">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-amber-400 text-amber-900 rounded-full mb-1">VIP</span>
                    <p className="text-primary-foreground font-bold text-lg">Hi Customer</p>
                    <p className="text-primary-foreground/70 text-sm">Get the help you need</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20" />
                </div>
              </div>

              <div className="bg-white px-4 -mt-2 relative rounded-t-2xl pt-4 space-y-3">
                {/* Menu Items */}
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Chat to get help</p>
                    <p className="text-xs text-muted-foreground">Focused on your exact issues</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Your support requests</p>
                    <p className="text-xs text-muted-foreground">Check active and past requests</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">FAQ & Info Centre</p>
                    <p className="text-xs text-muted-foreground">Browse & learn about our services</p>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="pt-2">
                  <p className="font-semibold text-sm mb-2">Recent activities</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-primary/10" />
                      <div className="flex-1">
                        <p className="text-xs font-medium">Order from Restaurant</p>
                        <p className="text-[10px] text-muted-foreground">02 Feb 2026, 10:20PM</p>
                      </div>
                      <span className="text-xs font-semibold">RM38</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-amber-100" />
                      <div className="flex-1">
                        <p className="text-[10px] text-destructive font-medium">Cancelled</p>
                        <p className="text-xs font-medium">Order from Restaurant</p>
                        <p className="text-[10px] text-muted-foreground">02 Feb 2026, 10:19PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ChefHat, Clock } from "lucide-react";

interface OrderKitchenStatusProps {
  status: string;
  timestamp: string;
}

export function OrderKitchenStatus({ status, timestamp }: OrderKitchenStatusProps) {
  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">Kitchen Status</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <ChefHat className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Status
            </span>
            <p className="font-medium">{status}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Clock className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Accepted At
            </span>
            <p className="font-medium">{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

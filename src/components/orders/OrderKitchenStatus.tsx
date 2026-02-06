import { ChefHat, Clock } from "lucide-react";

interface OrderKitchenStatusProps {
  status: string;
  timestamp: string;
}

export function OrderKitchenStatus({ status, timestamp }: OrderKitchenStatusProps) {
  const isAccepted = status.toLowerCase() === "kitchen accepted";

  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">Kitchen Status</h2>
      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
          isAccepted 
            ? "bg-emerald-100 dark:bg-emerald-900/30" 
            : "bg-orange-100 dark:bg-orange-900/30"
        }`}>
          <ChefHat className={`h-5 w-5 ${
            isAccepted ? "text-emerald-600 dark:text-emerald-400" : "text-orange-600 dark:text-orange-400"
          }`} />
        </div>
        <div className="min-w-0 flex-1">
          <p className={`font-semibold text-sm ${
            isAccepted ? "text-emerald-700 dark:text-emerald-400" : "text-orange-700 dark:text-orange-400"
          }`}>
            {status}
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

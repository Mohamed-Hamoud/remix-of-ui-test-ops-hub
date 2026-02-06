import { Utensils, Car, StickyNote, ThumbsUp } from "lucide-react";

interface OrderEvaluationDetailsProps {
  foodEvaluation?: string;
  driverEvaluation?: string;
  driverName?: string;
  note?: string;
}

export function OrderEvaluationDetails({
  foodEvaluation,
  driverEvaluation,
  driverName,
  note,
}: OrderEvaluationDetailsProps) {
  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">Evaluation Details</h2>
      <div className="space-y-4">
        {/* Food Evaluation */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
            <Utensils className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Food Evaluation
            </span>
            <p className="font-medium flex items-center gap-1.5">
              <ThumbsUp className="h-3.5 w-3.5 text-success" />
              {foodEvaluation || "N/A"}
            </p>
          </div>
        </div>

        {/* Driver Evaluation */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Car className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Driver Evaluation
            </span>
            <p className="font-medium">{driverName || "N/A"}</p>
          </div>
        </div>

        {/* Customer Note */}
        {note && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30">
            <div className="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <StickyNote className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Note
              </span>
              <p className="text-sm text-foreground">{note}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

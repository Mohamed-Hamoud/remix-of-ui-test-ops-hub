import { Utensils, Car, StickyNote, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface OrderEvaluationDetailsProps {
  foodRating?: number;
  foodEvaluation?: string;
  driverRating?: number;
  driverName?: string;
  driverPhotoUrl?: string;
  note?: string;
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground/30"
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs text-muted-foreground font-medium">
        {rating}/{max}
      </span>
    </div>
  );
}

export function OrderEvaluationDetails({
  foodRating = 0,
  foodEvaluation,
  driverRating = 0,
  driverName,
  driverPhotoUrl,
  note,
}: OrderEvaluationDetailsProps) {
  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">Evaluation Details</h2>
      <div className="space-y-4">
        {/* Food Evaluation */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
            <Utensils className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Food Evaluation
            </span>
            <StarRating rating={foodRating} />
            {foodEvaluation && (
              <p className="text-sm text-muted-foreground mt-1">{foodEvaluation}</p>
            )}
          </div>
        </div>

        {/* Driver Evaluation */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <Avatar className="h-10 w-10 flex-shrink-0">
            {driverPhotoUrl ? (
              <AvatarImage src={driverPhotoUrl} alt={driverName || "Driver"} />
            ) : null}
            <AvatarFallback className="bg-blue-100 dark:bg-blue-900/30 text-blue-500 text-xs">
              {driverName
                ? driverName
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                : "DR"}
            </AvatarFallback>
          </Avatar>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Driver Evaluation
            </span>
            <StarRating rating={driverRating} />
            {driverName && (
              <p className="text-sm font-medium mt-1">{driverName}</p>
            )}
          </div>
        </div>

        {/* Customer Note */}
        {note && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30">
            <div className="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
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

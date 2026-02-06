import { Check } from "lucide-react";

interface TimelineEvent {
  status: string;
  date: string;
  isCompleted?: boolean;
}

interface OrderTimelineProps {
  events: TimelineEvent[];
}

/** Map each status to its dot border color based on reference screenshots */
function getStatusColor(status: string): string {
  const s = status.toLowerCase();
  if (s === "completed") return "border-emerald-500";
  if (s === "payment failed" || s === "cancelled" || s === "failed") return "border-red-500";
  if (s === "assigning driver") return "border-orange-400";
  if (s === "delivery ongoing") return "border-orange-400";
  if (s === "delivery picked up") return "border-blue-400";
  if (s === "new") return "border-blue-500";
  if (s === "ready to prepare") return "border-blue-500";
  if (s === "kitchen accepted") return "border-blue-500";
  if (s === "ready to deliver") return "border-gray-800 dark:border-gray-200";
  if (s === "payment confirmed") return "border-blue-500";
  return "border-muted-foreground/50";
}

export function OrderTimeline({ events }: OrderTimelineProps) {
  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">History</h2>
      <div className="relative">
        {events.map((event, index) => {
          const isLast = index === events.length - 1;
          const colorClass = getStatusColor(event.status);

          return (
            <div key={index} className="relative flex gap-3 pb-5 last:pb-0">
              {/* Vertical line */}
              {!isLast && (
                <div className="absolute left-[9px] top-5 bottom-0 w-0.5 bg-border" />
              )}

              {/* Dot / Checkmark */}
              <div className="relative z-10 flex-shrink-0 mt-0.5">
                {event.isCompleted ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div
                    className={`h-5 w-5 rounded-full border-[3px] bg-white dark:bg-card ${colorClass}`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="font-semibold text-sm text-foreground leading-tight">
                  {event.status}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{event.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import { Check } from "lucide-react";

type TimelineColor = "blue" | "red" | "orange" | "green" | "gray";

interface TimelineEvent {
  status: string;
  date: string;
  color?: TimelineColor;
  isCompleted?: boolean;
}

interface OrderTimelineProps {
  events: TimelineEvent[];
}

const dotColors: Record<TimelineColor, string> = {
  blue: "border-blue-500 bg-blue-500",
  red: "border-red-500 bg-red-500",
  orange: "border-orange-400 bg-orange-400",
  green: "border-emerald-500 bg-emerald-500",
  gray: "border-muted-foreground/40 bg-muted-foreground/40",
};

export function OrderTimeline({ events }: OrderTimelineProps) {
  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">History</h2>
      <div className="relative">
        {events.map((event, index) => {
          const isLast = index === events.length - 1;
          const color = event.color || "gray";

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
                    className={`h-5 w-5 rounded-full border-[3px] bg-white dark:bg-card ${
                      dotColors[color].split(" ")[0]
                    }`}
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
import { Phone, ExternalLink, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface OrderCourierDetailsProps {
  name: string;
  phone: string;
  photoUrl?: string;
  receiptUrl?: string;
}

export function OrderCourierDetails({
  name,
  phone,
  photoUrl,
  receiptUrl,
}: OrderCourierDetailsProps) {
  return (
    <div className="rounded-lg border bg-card p-4 card-shadow">
      <h2 className="mb-4 section-title">Courier Details</h2>
      <div className="space-y-4">
        {/* Driver Info */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border">
          <Avatar className="h-10 w-10">
            {photoUrl ? (
              <AvatarImage src={photoUrl} alt={name} />
            ) : null}
            <AvatarFallback className="bg-primary/10 text-primary text-xs">
              {name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Driver
            </span>
            <p className="font-semibold text-sm truncate">{name}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
          <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Phone className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Phone
            </span>
            <p className="font-medium">{phone}</p>
          </div>
        </div>

        {/* Receipt URL */}
        {receiptUrl && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
            <div className="h-8 w-8 rounded-lg bg-info/10 flex items-center justify-center">
              <ExternalLink className="h-4 w-4 text-info" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Receipt URL
              </span>
              <a
                href={receiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-primary hover:underline truncate"
              >
                {receiptUrl}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

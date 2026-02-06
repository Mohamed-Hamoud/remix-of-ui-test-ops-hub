import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface OrderRefundSectionProps {
  orderTotal: string;
}

export function OrderRefundSection({ orderTotal }: OrderRefundSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [refundType, setRefundType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!amount || !reason || !refundType) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);
    // Mock refund submission
    setTimeout(() => {
      toast.success(`Refund of RM ${amount} has been submitted`);
      setIsLoading(false);
      setIsOpen(false);
      setAmount("");
      setReason("");
      setRefundType("");
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setAmount("");
    setReason("");
    setRefundType("");
  };

  return (
    <>
      <div className="rounded-lg border bg-card p-4 card-shadow">
        <div className="flex items-center justify-between mb-2">
          <h2 className="section-title">Refund History</h2>
          <Button
            size="sm"
            variant="outline"
            className="text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={() => setIsOpen(true)}
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
            Refund
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          No refunds for this order.
        </p>
      </div>

      {/* Refund Modal */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md p-0 gap-0">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="text-lg font-semibold">
              Refund Order
            </DialogTitle>
          </DialogHeader>

          <div className="px-6 py-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Order Total:{" "}
              <span className="font-semibold text-foreground">
                RM {orderTotal}
              </span>
            </p>

            {/* Refund Type */}
            <div className="form-group">
              <Label className="form-label">
                Refund Type <span className="text-destructive">*</span>
              </Label>
              <Select value={refundType} onValueChange={setRefundType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select refund type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Refund</SelectItem>
                  <SelectItem value="partial">Partial Refund</SelectItem>
                  <SelectItem value="item">Item Refund</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amount */}
            <div className="form-group">
              <Label className="form-label">
                Amount (RM) <span className="text-destructive">*</span>
              </Label>
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                max={orderTotal}
                step="0.01"
              />
            </div>

            {/* Reason */}
            <div className="form-group">
              <Label className="form-label">
                Reason <span className="text-destructive">*</span>
              </Label>
              <Textarea
                placeholder="Enter reason for refund..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter className="px-6 py-4 border-t bg-muted/30">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Confirm Refund"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

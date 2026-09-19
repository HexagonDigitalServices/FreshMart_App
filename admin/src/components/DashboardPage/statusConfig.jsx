import { CheckCircle2, Clock3, Truck, XCircle } from "lucide-react";

export const statusStyles = {
  Processing: "border-yellow-400/30 bg-yellow-400/12 text-yellow-200",
  "On the way": "border-sky-400/25 bg-sky-400/12 text-sky-200",
  Delivered: "border-emerald-400/25 bg-emerald-400/12 text-emerald-200",
  Cancelled: "border-rose-400/25 bg-rose-400/12 text-rose-200",
};

export const statusIcons = {
  Processing: Clock3,
  "On the way": Truck,
  Delivered: CheckCircle2,
  Cancelled: XCircle,
};

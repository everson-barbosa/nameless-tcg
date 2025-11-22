import { CircleGaugeIcon } from "lucide-react";

interface SpeedIndicatorProps {
  readonly speed: number;
}

export function SpeedIndicator({ speed }: SpeedIndicatorProps) {
  return (
    <div className="h-12 w-12">
      <div className="flex flex-col items-center justify-center">
        <span className="text-lg">{speed}</span>
        <CircleGaugeIcon width={18} height={18} />
      </div>
    </div>
  );
}

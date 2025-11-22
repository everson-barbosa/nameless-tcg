import { RefreshCcwDotIcon } from "lucide-react";

interface RotateIndicatorProps {
  readonly rotation: number;
}

export function RotateIndicator({ rotation }: RotateIndicatorProps) {
  const degree = String(rotation * 90).padStart(3, "0");

  return (
    <div className="h-12 w-12">
      <div className="flex flex-col items-center justify-center">
        <span className="text-lg">{degree}°</span>
        <RefreshCcwDotIcon width={18} height={18} />
      </div>
    </div>
  );
}

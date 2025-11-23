import { FootprintsIcon, GhostIcon, RabbitIcon } from "lucide-react";
import type { MobilityType } from "../../../../types/card.type";
import type { LucideReactIcon } from "@/types/lucide-react.type";

const MOBILITY_MAPPER: Record<
  MobilityType,
  {
    icon: LucideReactIcon;
    type: string;
  }
> = {
  SOLID: {
    icon: FootprintsIcon,
    type: "Andar",
  },
  JUMPER: {
    icon: RabbitIcon,
    type: "Pular",
  },
  GHOST: {
    icon: GhostIcon,
    type: "Flutuar",
  },
};

interface SpeedIndicatorProps {
  readonly speed: number;
  readonly mobility: MobilityType;
}

export function SpeedIndicator({ speed, mobility }: SpeedIndicatorProps) {
  const Mobility = MOBILITY_MAPPER[mobility];

  return (
    <div className="h-12 w-12">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xs">{speed}</span>
        <Mobility.icon width={18} height={18} />

        <span className="text-[9px]">({Mobility.type})</span>
      </div>
    </div>
  );
}

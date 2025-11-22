import { FootprintsIcon, GhostIcon, RabbitIcon } from "lucide-react";
import type { MobilityType } from "../../../../types/card.type";

interface MobilityIndicatorProps {
  readonly mobility: MobilityType;
}

const MOBILITY_MAPPER: Record<
  MobilityType,
  {
    icon: any;
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
    type: "Flutar",
  },
};

export function MobilityIndicator({ mobility }: MobilityIndicatorProps) {
  const Mobility = MOBILITY_MAPPER[mobility];

  return (
    <div className="h-12 w-12">
      <div className="h-12 flex flex-col items-center justify-between">
        <span className="h-6 flex items-center justify-center text-xs">
          {Mobility.type}
        </span>
        <Mobility.icon width={18} height={18} />
      </div>
    </div>
  );
}

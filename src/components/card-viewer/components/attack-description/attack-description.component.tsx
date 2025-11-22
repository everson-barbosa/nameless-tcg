import { SparkleIcon } from "lucide-react";
import { DamageAreaIndicator } from "./damage-area-indicator/damage-area-indicator.component";
import type { AttackAreaKind } from "../../../../types/card.type";

interface AttackDescriptionProps {
  title: string;
  cost: number;
  target?: Array<{ x: number; y: number }>;
  kind: AttackAreaKind;
}

export function AttackDescription({
  title,
  cost,
  target,
  kind,
}: AttackDescriptionProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2">
        <div className="w-20 flex flex-row items-start text-sm">
          {[...new Array(cost).keys()].map((item) => (
            <SparkleIcon key={item} width={18} height={18} />
          ))}
        </div>
        <span className="text-xs">{title}</span>
      </div>

      <div>
        <DamageAreaIndicator target={target ?? []} kind={kind} />
      </div>
    </div>
  );
}

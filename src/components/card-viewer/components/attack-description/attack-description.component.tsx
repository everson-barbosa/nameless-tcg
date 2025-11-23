import type { TroopAttack } from "@/types/card.type";
import { CostIndicator } from "./components/cost-indicator/cost-indicator.component";
import { HeartMinusIcon, HeartPlusIcon } from "lucide-react";
import { PatternAreaIndicator } from "./components/pattern-area-indicator/pattern-area-indicator.component";

interface AttackDescriptionProps {
  attack: TroopAttack;
}

export function AttackDescription({ attack }: AttackDescriptionProps) {
  const isHealthPositive = attack.healthDelta > 0;
  const healthDeltaPrefix = isHealthPositive ? "+" : "";
  const HealtDeltaIcon = isHealthPositive ? HeartPlusIcon : HeartMinusIcon;

  return (
    <div className="flex flex-row gap-1 justify-between">
      <div>
        <div className="flex flex-row gap-2">
          <CostIndicator cost={attack.cost} />
          <span className="text-[10px]">{attack.title}</span>
        </div>

        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items items-center gap-1">
              <span className="text-4xl">
                {healthDeltaPrefix}
                {attack.healthDelta}
              </span>
              <div className="flex flex-col items-center">
                <span className="text-[10px]">Vigor</span>
                <HealtDeltaIcon width={18} height={18} />
              </div>
            </div>

            <div>
              <span className="text-[10px]">Afeta: </span>
              <span className="text-[10px]">{attack.affect}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <PatternAreaIndicator pattern={attack.pattern} area={attack.area} />
      </div>
    </div>
  );
}

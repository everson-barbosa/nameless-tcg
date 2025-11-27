import type { TroopAttack } from "@/types/card.type";
import { CostIndicator } from "./components/cost-indicator/cost-indicator.component";
import { PatternAreaIndicator } from "./components/pattern-area-indicator/pattern-area-indicator.component";
import { AffectIndicator } from "./components/affect-indicator/affect-indicator.component";

interface AttackDescriptionProps {
  attack: TroopAttack;
}

export function AttackDescription({ attack }: AttackDescriptionProps) {
  return (
    <div className="flex flex-row gap-1 justify-between">
      <div className="w-full">
        <div className="flex flex-row gap-2">
          <CostIndicator cost={attack.cost} />
          <span className="text-[10px]">{attack.title}</span>
        </div>

        <div className="flex flex-row justify-between">
          <div>
            <AffectIndicator
              effect={attack.effect}
              affect={attack.affect}
              value={attack.value}
            />
          </div>

          <div></div>

          <div>
            <PatternAreaIndicator pattern={attack.pattern} area={attack.area} />
          </div>
        </div>
      </div>
    </div>
  );
}

import type { AttackAreaKind } from "../../../../../types/card.type";
import { FixedDamageAreaIndicator } from "./components/fixed-damage-area-indicator/fixed-damage-area-indicator.component";

interface DamageAreaIndicatorProps {
  readonly target: Array<{ x: number; y: number }>;
  readonly kind: AttackAreaKind;
}

export function DamageAreaIndicator({
  target,
  kind,
}: DamageAreaIndicatorProps) {
  switch (kind) {
    case "FIXED":
      return <FixedDamageAreaIndicator target={target} />;
    case "RELATIVE":
      return "Relative";
    default:
      return null;
  }
}

import type {
  TroopAttackArea,
  TroopAttackPattern,
  TroopAttackPatternFrontArea,
} from "@/types/card.type";
import { PatternFrontAreaIndicator } from "./pattern-front-area-indicator/pattern-front-area-indicator.component";

interface PatternAreaIndicatorProps {
  readonly pattern: TroopAttackPattern;
  readonly area: TroopAttackArea;
}

export function PatternAreaIndicator({
  pattern,
  area,
}: PatternAreaIndicatorProps) {
  switch (pattern) {
    case "FRONT":
      return (
        <PatternFrontAreaIndicator area={area as TroopAttackPatternFrontArea} />
      );
    case "AROUND":
      return "Around";
    case "FIXED":
      return "Fixed";
    default:
      return null;
  }
}

import type {
  TroopAttackArea,
  TroopAttackPattern,
  TroopAttackPatternAroundArea,
  TroopAttackPatternFixedArea,
  TroopAttackPatternFrontArea,
} from "@/types/card.type";
import { PatternFrontAreaIndicator } from "./components/pattern-front-area-indicator/pattern-front-area-indicator.component";
import { PatternAroundAreaIndicator } from "./components/pattern-around-area-indicator/pattern-around-area-indicator.component";
import { PatternFixedAreaIndicator } from "./components/pattern-fixed-area-indicator/pattern-fixed-area-indicator.component";

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
      return (
        <PatternAroundAreaIndicator
          area={area as TroopAttackPatternAroundArea}
        />
      );
    case "FIXED":
      return (
        <PatternFixedAreaIndicator area={area as TroopAttackPatternFixedArea} />
      );
    default:
      return null;
  }
}

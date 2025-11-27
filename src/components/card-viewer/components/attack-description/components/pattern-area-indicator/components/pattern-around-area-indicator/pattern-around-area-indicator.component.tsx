import type { TroopAttackPatternAroundArea } from "@/types/card.type";
import { TargetIcon } from "lucide-react";

const ROWS = 3;
const COLUMNS = 3;

const FIELDS: Record<TroopAttackPatternAroundArea, number[][]> = {
  ASIDE: [
    [1, 0],
    [1, 2],
  ],
  AURA: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  BACK_AND_FRONT: [
    [0, 1],
    [2, 1],
  ],
  CROSS: [
    [2, 1],
    [0, 1],
    [1, 0],
    [1, 2],
  ],
  X: [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
  ],
};

interface CheckIfPositionIsActiveProps {
  readonly fields: number[][];
  readonly row: number;
  readonly column: number;
}

function checkIfPositionIsActive({
  fields,
  row,
  column,
}: CheckIfPositionIsActiveProps) {
  return fields.some(
    ([currentRow, currentColumn]) =>
      currentRow === row && currentColumn === column
  );
}

interface PatternAroundAreaIndicatorProps {
  readonly area: TroopAttackPatternAroundArea;
}

export function PatternAroundAreaIndicator({
  area,
}: PatternAroundAreaIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex flex-col-reverse gap-0.5">
        {[...new Array(ROWS).keys()].map((row) => (
          <div key={row} className="flex flex-row gap-0.5">
            {[...new Array(COLUMNS).keys()].map((column) => {
              const isPositionReference =
                (ROWS - 1) / 2 === row && (COLUMNS - 1) / 2 === column;

              if (isPositionReference)
                return (
                  <div
                    key={column}
                    className="h-2 w-2 rounded-xs border-gray-50 border opacity-0"
                  />
                );

              const areaMatchWithPosition = checkIfPositionIsActive({
                fields: FIELDS[area],
                row,
                column,
              });

              return (
                <div
                  key={column}
                  className={`h-2 w-2 rounded-xs border-gray-50 border ${
                    areaMatchWithPosition ? "bg-gray-50" : ""
                  } ${areaMatchWithPosition ? "opacity-100" : "opacity-25"}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-0 items-center">
        <TargetIcon width={18} height={18} />

        <span className="text-[10px]">Em volta</span>
      </div>
    </div>
  );
}

import type { TroopAttackPatternFixedArea } from "@/types/card.type";
import { Grid3x3Icon } from "lucide-react";

const ROWS = 5;
const COLUMNS = 5;

const FIELDS: Record<TroopAttackPatternFixedArea, number[][]> = {
  CENTRAL: [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  CLEAR: [
    [0, 1],
    [0, 3],
    [1, 0],
    [1, 2],
    [1, 4],
    [2, 1],
    [2, 3],
    [3, 0],
    [3, 2],
    [3, 4],
    [4, 1],
    [4, 3],
  ],
  CRUSADE: [
    [1, 2],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 2],
  ],
  DARK: [
    [0, 0],
    [0, 2],
    [0, 4],
    [1, 1],
    [1, 3],
    [2, 0],
    [2, 2],
    [2, 4],
    [3, 1],
    [3, 3],
    [4, 0],
    [4, 2],
    [4, 4],
  ],
  REARGUARD: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  TOTAL: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
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

interface PatternFixedAreaIndicatorProps {
  readonly area: TroopAttackPatternFixedArea;
}

export function PatternFixedAreaIndicator({
  area,
}: PatternFixedAreaIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex flex-col-reverse gap-0.5">
        {[...new Array(ROWS).keys()].map((row) => (
          <div key={row} className="flex flex-row gap-0.5">
            {[...new Array(COLUMNS).keys()].map((column) => {
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
        <Grid3x3Icon width={18} height={18} />

        <span className="text-[10px]">Fixo</span>
      </div>
    </div>
  );
}

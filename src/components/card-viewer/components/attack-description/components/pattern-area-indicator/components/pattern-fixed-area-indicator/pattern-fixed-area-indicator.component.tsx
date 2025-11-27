import type { TroopAttackPatternFixedArea } from "@/types/card.type";
import { CrosshairIcon } from "lucide-react";

const ROWS = 3;
const COLUMNS = 3;

const FIELDS: Record<TroopAttackPatternFixedArea, number[][]> = {
  ROW: [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  COLUMN: [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  CROSSED: [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 1],
  ],
  UNIQUE: [[1, 1]],
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
        <CrosshairIcon width={18} height={18} />

        <span className="text-[10px]">Fixo</span>
      </div>
    </div>
  );
}

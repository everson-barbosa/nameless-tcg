/* eslint-disable react-hooks/exhaustive-deps */
import { LocateFixedIcon } from "lucide-react";
import { populateDamageArea } from "./utils/populate-damage-area/populate-damage-area.util";
import { useMemo } from "react";

interface FixedDamageAreaIndicatorProps {
  readonly target: Array<{ x: number; y: number }>;
}

export function FixedDamageAreaIndicator({
  target,
}: FixedDamageAreaIndicatorProps) {
  console.log(populateDamageArea({ target }));

  const damageArea = useMemo(
    () => populateDamageArea({ target }),
    [JSON.stringify(target)]
  );

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <span className="text-[9px]">Fixo</span>

      <div className="flex flex-col-reverse gap-0.5">
        {damageArea.map((row) => (
          <div key={JSON.stringify(row)} className="flex flex-row gap-0.5">
            {row.map((position) => (
              <div
                key={position.index}
                className={`h-2 w-2 border rounded-xs ${
                  position.areaMatchWithPosition ? "bg-gray-50" : ""
                } ${!position.areaMatchWithPosition && "opacity-25"}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-0 items-center justify-center">
        <LocateFixedIcon width={18} height={18} />
      </div>
    </div>
  );
}

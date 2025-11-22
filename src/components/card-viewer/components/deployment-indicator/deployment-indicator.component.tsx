/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { populateIndicator } from "./utils/populate-indicator/populate-indicator.util";

interface DeploymentIndicatorProps {
  areas: Array<[number, number]>;
}

export function DeploymentIndicator({ areas }: DeploymentIndicatorProps) {
  const indicators = useMemo(
    () => populateIndicator({ areas }),
    [JSON.stringify(areas)]
  );

  return (
    <div className="h-12 flex flex-col gap-0.5">
      {indicators.map((row) => {
        return (
          <div key={JSON.stringify(row)} className="flex flex-row gap-0.5">
            {row.map((position) => (
              <div
                key={position.index}
                className={`h-2 w-2 rounded-xs border ${
                  position.areaMatchWithPosition ? "bg-gray-50" : ""
                } ${!position.areaMatchWithPosition && "opacity-25"}`}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

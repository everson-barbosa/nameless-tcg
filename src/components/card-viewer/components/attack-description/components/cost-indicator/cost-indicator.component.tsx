import { SparkleIcon } from "lucide-react";

interface CostIndicatorProps {
  readonly cost: number;
}

export function CostIndicator({ cost }: CostIndicatorProps) {
  const hasNoCost = cost === 0;

  return (
    <div className="w-20 flex flex-row items-start text-sm">
      {hasNoCost ? (
        <span className="flex items-center text-[9px] opacity-75">
          Sem custo
        </span>
      ) : (
        [...new Array(cost).keys()].map((item) => (
          <SparkleIcon key={item} width={18} height={18} />
        ))
      )}
    </div>
  );
}

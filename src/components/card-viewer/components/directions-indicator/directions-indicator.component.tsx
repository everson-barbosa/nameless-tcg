import {
  ChessPawnIcon as CardIcon,
  DotIcon as NotAllowedIcon,
  ArrowUpIcon as NorthIcon,
  ArrowUpRightIcon as NortheastIcon,
  ArrowRightIcon as EastIcon,
  ArrowDownRightIcon as SouthEastIcon,
  ArrowDownIcon as SouthIcon,
  ArrowDownLeftIcon as SouthWestIcon,
  ArrowLeftIcon as WestIcon,
  ArrowUpLeftIcon as NorthWestIcon,
} from "lucide-react";
import type { Directions } from "../../../../types/card.type";

function NotAllowedDirectionIcon() {
  return <NotAllowedIcon className="opacity-25" />;
}

interface DirectionsIndicatorProps {
  readonly directions: Directions;
}

export function DirectionsIndicator({ directions }: DirectionsIndicatorProps) {
  const hasNorthDirection = directions.has("N");
  const hasNorthEastDirection = directions.has("NE");
  const hasEastDirection = directions.has("E");
  const hasSouthEastDirection = directions.has("SE");
  const hasSouthDirection = directions.has("S");
  const hasSouthWestDirection = directions.has("SW");
  const hasWestDirection = directions.has("W");
  const hasNorthWestDirection = directions.has("NW");

  return (
    <div className="h-12 w-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 flex items-center justify-center">
        {hasNorthDirection ? <NorthIcon /> : <NotAllowedDirectionIcon />}
      </div>

      <div className="absolute top-0 right-0 h-4 w-4 flex items-center justify-center">
        {hasNorthEastDirection ? (
          <NortheastIcon />
        ) : (
          <NotAllowedDirectionIcon />
        )}
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2  h-4 w-4 flex items-center justify-center">
        {hasEastDirection ? <EastIcon /> : <NotAllowedDirectionIcon />}
      </div>

      <div className="absolute bottom-0 right-0 h-4 w-4 flex items-center justify-center">
        {hasSouthEastDirection ? (
          <SouthEastIcon />
        ) : (
          <NotAllowedDirectionIcon />
        )}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-4 flex items-center justify-center">
        {hasSouthDirection ? <SouthIcon /> : <NotAllowedDirectionIcon />}
      </div>

      <div className="absolute bottom-0 left-0 h-4 w-4 flex items-center justify-center">
        {hasSouthWestDirection ? (
          <SouthWestIcon />
        ) : (
          <NotAllowedDirectionIcon />
        )}
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-4 w-4 flex items-center justify-center">
        {hasWestDirection ? <WestIcon /> : <NotAllowedDirectionIcon />}
      </div>

      <div className="absolute top-0 left-0 h-4 w-4 flex items-center justify-center">
        {hasNorthWestDirection ? (
          <NorthWestIcon />
        ) : (
          <NotAllowedDirectionIcon />
        )}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-4 w-4">
        <CardIcon width={18} height={18} />
      </div>
    </div>
  );
}

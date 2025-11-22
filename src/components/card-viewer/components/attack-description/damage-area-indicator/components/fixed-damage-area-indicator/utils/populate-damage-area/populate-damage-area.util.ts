import { COLUMNS, ROWS } from "../../../../../../../../../constants/board";

interface PopulateDamageAreaProps {
  target: Array<{ x: number; y: number }>;
}

export function populateDamageArea({ target }: PopulateDamageAreaProps) {
  const areas = [];

  for (let currentRow = 0; currentRow < ROWS; currentRow++) {
    const row = [];

    for (let currentColumn = 0; currentColumn < COLUMNS; currentColumn++) {
      const areaMatchWithPosition = target.some(
        (area) => area.y === currentColumn && area.x === currentRow
      );
      const index = `col-${currentColumn + 1}-row-${currentRow + 1}`;

      row.push({ areaMatchWithPosition, index });
    }

    areas.push(row);
  }

  return areas;
}

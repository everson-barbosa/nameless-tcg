import { COLUMNS, ROWS } from "../../../../../../constants/board";

interface PopulateIndicatorProps {
  readonly areas: Array<[number, number]>;
}

export function populateIndicator({ areas }: PopulateIndicatorProps) {
  const indicator = [];

  for (let currentRow = ROWS - 1; currentRow >= 0; currentRow--) {
    const row = [];

    for (let currentColumn = 0; currentColumn < COLUMNS; currentColumn++) {
      const areaMatchWithPosition = areas.some((area) => {
        const [areaRow, areaColumn] = area;

        return currentRow === areaRow && currentColumn === areaColumn;
      });
      const index = `col-${currentColumn + 1}-row-${currentRow + 1}`;

      row.push({ areaMatchWithPosition, index });
    }

    indicator.push(row);
  }

  return indicator;
}

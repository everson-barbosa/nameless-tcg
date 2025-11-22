import { CardViewer } from "./components/card-viewer/card-viewer.component";
import artwork1 from "/assets/cards/artworks/A1-001.jpg";
import artwork2 from "/assets/cards/artworks/A1-002.jpg";
import artwork3 from "/assets/cards/artworks/A1-003.jpg";

export function App() {
  return (
    <div className="min-h-screen flex flex-wrap gap-2 justify-center items-center">
      <CardViewer
        card={{
          title: "Escaravelho voltáico",
          artwork: artwork1,
          kind: "troop",
          vigor: 18,
          deploymentAreas: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 1],
            [1, 2],
            [1, 3],
          ],
          speed: 1,
          rotation: 1,
          directions: new Set(["N"]),
          mobility: "SOLID",
          attack: {
            title: "Chifre de Thor",
            cost: 3,
            kind: "FIXED",
            target: [
              {
                x: 1,
                y: 2,
              },
              {
                x: 2,
                y: 2,
              },
              {
                x: 3,
                y: 2,
              },
            ],
          },
        }}
      />

      <CardViewer
        card={{
          title: "Sacorfago temporal",
          artwork: artwork2,
          kind: "troop",
          vigor: 12,
          mobility: "GHOST",
          deploymentAreas: [
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
          speed: 1,
          rotation: 0,
          directions: new Set(["E", "W"]),
          attack: {
            title: "Miasma",
            cost: 0,
            kind: "FIXED",
            target: [
              {
                x: 1,
                y: 2,
              },
              {
                x: 3,
                y: 3,
              },
              {
                x: 3,
                y: 2,
              },
              {
                x: 1,
                y: 3,
              },
              {
                x: 2,
                y: 3,
              },
              {
                x: 3,
                y: 1,
              },
              {
                x: 1,
                y: 1,
              },
              {
                x: 2,
                y: 1,
              },
            ],
          },
        }}
      />

      <CardViewer
        card={{
          title: "Atiradora do Reino Anacrônico",
          artwork: artwork3,
          kind: "troop",
          vigor: 8,
          mobility: "JUMPER",
          deploymentAreas: [
            [0, 0],
            [0, 2],
            [0, 4],
          ],
          speed: 2,
          rotation: 3,
          directions: new Set(["N", "S", "E", "W", "NE", "NW", "SE", "SW"]),
          attack: {
            title: "Tiro astral",
            cost: 1,
            kind: "FIXED",
            target: [
              {
                x: 1,
                y: 2,
              },
              {
                x: 2,
                y: 2,
              },
              {
                x: 3,
                y: 2,
              },
              {
                x: 2,
                y: 3,
              },
              {
                x: 2,
                y: 1,
              },
            ],
          },
        }}
      />
    </div>
  );
}

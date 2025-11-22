import { HeartIcon } from "lucide-react";
import type {
  AttackAreaKind,
  Directions,
  MobilityType,
} from "../../types/card.type";
import { AttackDescription } from "./components/attack-description/attack-description.component";
import { DeploymentIndicator } from "./components/deployment-indicator/deployment-indicator.component";
import { DirectionsIndicator } from "./components/directions-indicator/directions-indicator.component";
import { RotateIndicator } from "./components/rotate-indicator/rotate-indicator.component";
import { SpeedIndicator } from "./components/speed-indicator/speed-indicator.component";
import { MobilityIndicator } from "./components/mobility-indicator/mobility-indicator.component";

interface Card {
  title: string;
  artwork: string;
  deploymentAreas: Array<[number, number]>;
  speed: number;
  rotation: number;
  mobility: MobilityType;
  directions: Directions;
  attack: {
    title: string;
    cost: number;
    kind: AttackAreaKind;
    target: Array<{ x: number; y: number }>;
  };
}

interface CardTroop extends Card {
  kind: "troop";
  vigor: number;
}

interface CardViewerProps {
  readonly card: CardTroop;
}

export function CardViewer({ card }: CardViewerProps) {
  return (
    <div className="min-h-[440px] w-[315px] border-2">
      <div
        className={`min-h-[440px] w-full bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${card.artwork})` }}
      >
        <div className="min-h-[440px] w-full flex flex-col justify-between">
          <header
            style={{
              backgroundColor: "rgba(0,0,0,.75)",
            }}
            className="py-0 p-2 flex flex-row justify-between items-center border-b"
          >
            <h1 className="text-xs">{card.title}</h1>

            <span className="relative flex flex-row gap-1 items-center">
              <span className="text-lg">
                {String(card.vigor).padStart(2, "0")}
              </span>
              <HeartIcon className="" width={12} height={12} />
            </span>
          </header>

          <section
            className="border-t"
            style={{
              backgroundColor: "rgba(0,0,0,.75)",
            }}
          >
            <div className="p-2">
              <div className="flex flex-col gap-4">
                <ul className="flex flex-row gap-1">
                  <li className="px-2 h-4 flex text-[9px] text-gray-50 border rounded-sm">
                    Atirador
                  </li>
                  <li className="px-2 h-4 flex text-[9px] text-gray-50 border rounded-sm">
                    Humanóide
                  </li>
                  <li className="px-2 h-4 flex text-[9px] text-gray-50 border rounded-sm">
                    Místico
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="p-2">
              <AttackDescription
                title={card.attack.title}
                cost={card.attack.cost}
                kind={card.attack.kind}
                target={card.attack.target}
              />
            </div>

            <hr />

            <div className="flex flex-row justify-between items-center p-2">
              <div className="flex flex-col items-center">
                <h4 className="text-[9px]">Instalação</h4>
                <DeploymentIndicator areas={card.deploymentAreas} />
              </div>

              <div className="flex flex-col items-center">
                <h4 className="text-[9px]">Direções</h4>
                <DirectionsIndicator directions={card.directions} />
              </div>

              <div className="flex flex-col items-center">
                <h4 className="text-[9px]">Velocidade</h4>
                <SpeedIndicator speed={card.speed} />
              </div>

              <div className="flex flex-col items-center">
                <h4 className="text-[9px]">Mobilidade</h4>
                <MobilityIndicator mobility={card.mobility} />
              </div>

              <div className="flex flex-col items-center">
                <h4 className="text-[9px] text-center">Rotação</h4>
                <RotateIndicator rotation={card.rotation} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

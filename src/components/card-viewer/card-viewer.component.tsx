import { HeartIcon } from "lucide-react";
import type { Card } from "../../types/card.type";
import { AttackDescription } from "./components/attack-description/attack-description.component";
import { DeploymentIndicator } from "./components/deployment-indicator/deployment-indicator.component";
import { DirectionsIndicator } from "./components/directions-indicator/directions-indicator.component";
import { RotateIndicator } from "./components/rotate-indicator/rotate-indicator.component";
import { SpeedIndicator } from "./components/speed-indicator/speed-indicator.component";
import { TagList } from "./components/tag-list/tag-list.component";

interface CardViewerProps {
  readonly card: Card;
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
            className="py-1 p-2 flex flex-row justify-between items-center border-b"
          >
            <h1 className="text-xs">{card.title}</h1>

            <span className="relative flex flex-row gap-1 items-center">
              <span className="text-lg">
                {String(card.health).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-0 items-center">
                <span className="text-[10px]">Vigor</span>
                <HeartIcon className="" width={18} height={18} />
              </div>
            </span>
          </header>

          <section
            className="border-t"
            style={{
              backgroundColor: "rgba(0,0,0,.75)",
            }}
          >
            <TagList tags={card.tags} />

            <hr />

            <div className="p-2 h-28">
              <AttackDescription attack={card.attack} />
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
                <SpeedIndicator speed={card.speed} mobility={card.mobility} />
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

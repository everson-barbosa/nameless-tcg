import { CardViewer } from "@/components/card-viewer/card-viewer.component";
import { CARDS } from "./mock/cards";

export function CardViewerPage() {
  return (
    <div className="pt-2 pmin-h-screen w-full flex justify-center items-center">
      <div className="min-h-screen flex flex-wrap gap-2 items-start justify-start">
        {CARDS.map((card) => (
          <CardViewer key={card.artwork} card={card} />
        ))}
      </div>
    </div>
  );
}

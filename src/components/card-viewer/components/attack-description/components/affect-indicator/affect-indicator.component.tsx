import type { AttackAffect, AttackEffect } from "@/types/card.type";
import {
  HandHeartIcon,
  HandPalmIcon,
  SwordIcon,
  type Icon,
} from "@phosphor-icons/react";

interface AffectIndicatorProps {
  readonly effect: AttackEffect;
  readonly affect: AttackAffect;
  readonly value: number;
}

const EFFECT_MAPPER: Record<AttackEffect, { text: string; icon: Icon }> = {
  DAMAGE: {
    text: "Dano",
    icon: SwordIcon,
  },
  HEAL: {
    text: "Cura",
    icon: HandHeartIcon,
  },
  PUSH: {
    text: "Empurrar",
    icon: HandPalmIcon,
  },
};

const AFFECT_MAPPER: Record<AttackAffect, { text: string }> = {
  ENEMY: {
    text: "Afeta inimigo(s)",
  },
  CONRADE: {
    text: "Afeta aliado(s)",
  },
  ALL: {
    text: "Afeta todos",
  },
};

export function AffectIndicator({
  effect,
  value,
  affect,
}: AffectIndicatorProps) {
  const Effect = EFFECT_MAPPER[effect];
  const Affect = AFFECT_MAPPER[affect];

  return (
    <div className="flex flex-row items-center justify-center mt-2 gap-1">
      <span className="text-5xl font-bold">
        {String(value).padStart(2, "0")}
      </span>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-end gap-1">
          <Effect.icon size={24} />
          <div className="flex flex-col">
            <span className="text-[10px]">{Effect.text} </span>
            <span className="text-[9px]">{Affect.text} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

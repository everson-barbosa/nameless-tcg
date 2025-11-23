export type Direction = "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";
export type Directions = Set<Direction>;

export type MobilityType = "SOLID" | "GHOST" | "JUMPER";

export type TroopAttackPattern = "FRONT" | "AROUND" | "FIXED";

export type TroopAttackPatternFrontArea =
  | "MEELE"
  | "PIERCE"
  | "BOW"
  | "LASER"
  | "COLUMN"
  | "DELTA";
export type TroopAttackPatternAroundArea =
  | "BACK_AND_FRONT"
  | "ASIDE"
  | "CROSS"
  | "AURA"
  | "X";
export type TroopAttackPatternFixedArea =
  | "CENTRAL"
  | "DARK"
  | "CLEAR"
  | "TOTAL"
  | "CRUSADE"
  | "REARGUARD";

export type TroopAttackArea =
  | TroopAttackPatternFrontArea
  | TroopAttackPatternAroundArea
  | TroopAttackPatternFixedArea;

export type AttackAffect = "CONRADE" | "ENEMY" | "ALL";

export interface TroopAttack {
  title: string;
  cost: number;
  pattern: TroopAttackPattern;
  area: TroopAttackArea;
  affect: AttackAffect;
  healthDelta: number;
}

export interface Card {
  health: number;
  title: string;
  artwork: string;
  tags: string[];
  deploymentAreas: Array<[number, number]>;
  speed: number;
  rotation: number;
  mobility: MobilityType;
  directions: Directions;
  attack: TroopAttack;
}

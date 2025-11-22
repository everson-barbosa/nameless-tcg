export type Direction = "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";
export type Directions = Set<Direction>;

export type AttackAreaKind = "FIXED" | "RELATIVE" | "SNIPER";
export type MobilityType = "SOLID" | "GHOST" | "JUMPER";

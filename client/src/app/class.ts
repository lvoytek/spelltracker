import { PathfinderSpell } from "./spell";

export interface PathfinderClass {
  name: string,
  isPrepared: boolean,
  spellsPerDay: Array<number>,
  availableSpells: Array<Array<PathfinderSpell>>
}

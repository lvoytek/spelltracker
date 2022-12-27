import { PathfinderClass } from "./class";
import { PathfinderSpell } from "./spell";

export interface PathfinderCharacter {
  name: string,
  classes: Array<PathfinderClass>,
  spells: Array<Array<PathfinderSpell>>
}

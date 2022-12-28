import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Url } from 'url';

import { PathfinderClassSpell } from './pathfinderclassspell.entity';

@Entity()
export class PathfinderClass {
  @PrimaryColumn("varchar", {length: 120})
  name: string;

  @Column("varchar", {length: 120})
  link: Url;

  @Column("simple-json")
  spells_per_day: JSON;

  @OneToMany(() => PathfinderClassSpell, (pathfinderClassSpell) => pathfinderClassSpell.spellcaster_class)
  classSpells: PathfinderClassSpell[];
}

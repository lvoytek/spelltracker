import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Url } from 'url';

import { PathfinderClassSpell } from './pathfinderclassspell.entity';

@Entity()
export class PathfinderSpell {
  @PrimaryColumn("varchar", {length: 120})
  name: string;

  @Column("varchar", {length: 120})
  link: Url;

  @Column("varchar", {length: 4000})
  description: string;

  @Column("varchar", {length: 25})
  school: string;

  @Column("varchar", {length: 25})
  casting_time: string;

  @Column("varchar", {length: 120})
  components: string;

  @Column("varchar", {length: 25})
  range: string;

  @Column("varchar", {length: 120})
  target: string;

  @Column("varchar", {length: 25})
  duration: string;

  @Column("varchar", {length: 25})
  saving_throw: string;

  @Column("varchar", {length: 25})
  spell_resistance: string;

  @OneToMany(() => PathfinderClassSpell, (pathfinderClassSpell) => pathfinderClassSpell.spell)
  spellClasses: PathfinderClassSpell[];
}

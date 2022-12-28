import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { PathfinderClass } from './pathfinderclass.entity';
import { PathfinderSpell } from './pathfinderspell.entity';

@Entity()
export class PathfinderClassSpell {
  @PrimaryColumn()
  pathfinderClassName: string;

  @PrimaryColumn()
  pathfinderSpellName: string;

  @Column("tinyint")
  spell_level: number;

  @ManyToMany(() => PathfinderClass)
  pathfinderClass: PathfinderClass;

  @ManyToMany(() => PathfinderSpell)
  pathfinderSpell: PathfinderSpell;
}

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PathfinderClass } from './pathfinderclass.entity';
import { PathfinderSpell } from './pathfinderspell.entity';

@Entity()
export class PathfinderClassSpell {
  @PrimaryGeneratedColumn()
  id: number

  @Column("tinyint")
  spell_level: number;

  @ManyToOne(() => PathfinderClass, (pathfinderClass) => pathfinderClass.classSpells)
  spellcaster_class: PathfinderClass;

  @ManyToOne(() => PathfinderSpell, (pathfinderSpell) => pathfinderSpell.spellClasses)
  spell: PathfinderSpell;
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class PathfinderCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {length: 120})
  name: string;

  @Column("tinyint")
  strength: number;

  @Column("tinyint")
  dexterity: number;

  @Column("tinyint")
  constitution: number;

  @Column("tinyint")
  intelligence: number;

  @Column("tinyint")
  wisdom: number;

  @Column("tinyint")
  charisma: number;

  @ManyToOne(() => User, (user) => user.characters)
  user: User;
}

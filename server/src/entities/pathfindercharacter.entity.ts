import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PathfinderCharacter {
  @PrimaryGeneratedColumn()
  id: number

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
}

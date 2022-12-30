import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { PathfinderCharacter } from './pathfindercharacter.entity';


@Entity()
export class User {
  @PrimaryColumn("varchar", {length: 255})
  email: string;

  @Column("boolean")
  admin: boolean;

  @OneToMany(() => PathfinderCharacter, (pathfinderCharacter) => pathfinderCharacter.user)
  characters: PathfinderCharacter[];
}

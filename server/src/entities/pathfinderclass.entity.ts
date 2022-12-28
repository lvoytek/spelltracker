import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Url } from 'url';
@Entity()
export class PathfinderClass {
  @PrimaryColumn("varchar", {length: 120})
  name: string;

  @Column("varchar", {length: 120})
  link: Url;

  @Column("simple-json")
  spells_per_day: JSON;
}

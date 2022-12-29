import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PathfinderClassSpell } from 'src/entities/pathfinderclassspell.entity';

@Injectable()
export class ClassSpellService {
  constructor(
    @InjectRepository(PathfinderClassSpell)
    private classSpellRepository: Repository<PathfinderClassSpell>
  ) {}

  async create(classSpell: PathfinderClassSpell): Promise<PathfinderClassSpell> {
    return await this.classSpellRepository.save(classSpell);
  }

  async getByClass(className: string): Promise<PathfinderClassSpell[]> {
    return await this.classSpellRepository.createQueryBuilder("pathfinderclassspell").leftJoinAndSelect("pathfinderclassspell.spell", "spell").leftJoinAndSelect("pathfinderclassspell.spellcaster_class", "class").where("class.name = :classname", {classname: className}).getMany();
  }

  async getBySpell(spellName: string): Promise<PathfinderClassSpell[]> {
    return await this.classSpellRepository.createQueryBuilder("pathfinderclassspell").leftJoinAndSelect("pathfinderclassspell.spell", "spell").leftJoinAndSelect("pathfinderclassspell.spellcaster_class", "class").where("spell.name = :spellname", {spellname: spellName}).getMany();
  }

  async delete(className: string, spellName: string): Promise<DeleteResult> {
    return await this.classSpellRepository.createQueryBuilder("pathfinderclassspell").delete().from(PathfinderClassSpell).where("spell.name = :spellname and spellcaster_class.name = :classname", {spellname: spellName, classname: className}).execute();
  }
}

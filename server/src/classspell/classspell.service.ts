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
    return await this.classSpellRepository.find({where: {spellcaster_class: {name: className}}});
  }

  async getBySpell(spellName: string): Promise<PathfinderClassSpell[]> {
    return await this.classSpellRepository.find({where: {spell: {name: spellName}}});
  }

  async delete(className: string, spellName: string): Promise<DeleteResult> {
    return await this.classSpellRepository.createQueryBuilder("pathfinderclassspell").delete().from(PathfinderClassSpell).where("spell.name = :spellname and spellcaster_class.name = :classname", {spellname: spellName, classname: className}).execute();
  }
}

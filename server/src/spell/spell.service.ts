import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PathfinderSpell } from 'src/entities/pathfinderspell.entity';

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(PathfinderSpell)
    private spellRepository: Repository<PathfinderSpell>
  ) {}

  async create(spell: PathfinderSpell): Promise<PathfinderSpell> {
    return await this.spellRepository.save(spell);
  }

  async get(spellName: string): Promise<PathfinderSpell> {
    return await this.spellRepository.findOneBy({name: spellName});
  }

  async delete(spellName: string): Promise<DeleteResult> {
    return await this.spellRepository.delete({name: spellName});
  }
}

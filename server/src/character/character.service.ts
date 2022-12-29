import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PathfinderCharacter } from 'src/entities/pathfindercharacter.entity';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(PathfinderCharacter)
    private characterRepository: Repository<PathfinderCharacter>
  ) {}

  async create(character: PathfinderCharacter): Promise<PathfinderCharacter> {
    return await this.characterRepository.save(character);
  }

  async get(id: number): Promise<PathfinderCharacter> {
    return await this.characterRepository.findOneBy({id});
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.characterRepository.delete({id});
  }
}

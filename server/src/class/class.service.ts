import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PathfinderClass } from 'src/entities/pathfinderclass.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(PathfinderClass)
    private classRepository: Repository<PathfinderClass>
  ) {}

  async create(pathfinderClass: PathfinderClass): Promise<PathfinderClass> {
    return await this.classRepository.save(pathfinderClass);
  }

  async get(className: string): Promise<PathfinderClass> {
    return await this.classRepository.findOneBy({name: className});
  }

  async getAll(): Promise<PathfinderClass[]> {
    return await this.classRepository.find();
  }

  async delete(className: string): Promise<DeleteResult> {
    return await this.classRepository.delete({name: className});
  }
}

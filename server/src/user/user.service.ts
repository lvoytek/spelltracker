import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async get(email: string): Promise<User> {
    return await this.userRepository.findOneBy({email});
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.email, user);
}

  async delete(email: string): Promise<DeleteResult> {
    return await this.userRepository.delete({email});
  }
}

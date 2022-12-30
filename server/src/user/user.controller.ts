import { Controller, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}

  @Put()
  async update(@Body() user: User): Promise<any> {
    return this.userService.update(user);
  }

  @Delete(':email')
  async delete(@Param('email') email: string): Promise<any> {
    return this.userService.delete(email);
  }
}


import { Controller, Get, Put, Delete, Request, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}


  @UseGuards(JwtAuthGuard)
  @Get()
  async read(@Request() req): Promise<User> {
    return req.user;
  }

  @Put()
  async update(@Body() user: User): Promise<any> {
    return this.userService.update(user);
  }

  @Delete(':email')
  async delete(@Param('email') email: string): Promise<any> {
    return this.userService.delete(email);
  }
}


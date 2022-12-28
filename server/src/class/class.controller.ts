import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ClassService } from './class.service';
import { PathfinderClass } from 'src/entities/pathfinderclass.entity';

@Controller('class')
export class ClassController {
  constructor(private classService: ClassService){}

  @Get(':name')
  async read(@Param('name') name: string): Promise<PathfinderClass> {
    return this.classService.get(name);
  }

  @Post('add')
  async create(@Body() pathfinderClass: PathfinderClass): Promise<any> {
    return this.classService.create(pathfinderClass);
  }

  @Delete(':name')
  async delete(@Param('name') name: string): Promise<any> {
    return this.classService.delete(name);
  }
}

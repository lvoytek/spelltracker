import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { SpellService } from './spell.service';
import { PathfinderSpell } from 'src/entities/pathfinderspell.entity';

@Controller('spell')
export class SpellController {
  constructor(private spellService: SpellService){}

  @Get(':name')
  async read(@Param('name') name: string): Promise<PathfinderSpell> {
    return this.spellService.get(name);
  }

  @Post('add')
  async create(@Body() spell: PathfinderSpell): Promise<any> {
    return this.spellService.create(spell);
  }

  @Delete(':name')
  async delete(@Param('name') name: string): Promise<any> {
    return this.spellService.delete(name);
  }
}

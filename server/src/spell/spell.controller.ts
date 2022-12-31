import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SpellService } from './spell.service';
import { PathfinderSpell } from 'src/entities/pathfinderspell.entity';
import { JwtAdminAuthGuard } from 'src/auth/jwtadmin.guard';

@Controller('spell')
export class SpellController {
  constructor(private spellService: SpellService){}

  @Get(':name')
  async read(@Param('name') name: string): Promise<PathfinderSpell> {
    return this.spellService.get(name);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Post('add')
  async create(@Body() spell: PathfinderSpell): Promise<any> {
    return this.spellService.create(spell);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete(':name')
  async delete(@Param('name') name: string): Promise<any> {
    return this.spellService.delete(name);
  }
}

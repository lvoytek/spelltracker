import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ClassSpellService } from './classspell.service';
import { PathfinderClassSpell } from 'src/entities/pathfinderclassspell.entity';
import { ClassService } from 'src/class/class.service';
import { SpellService } from 'src/spell/spell.service';

@Controller('classspell')
export class ClassSpellController {
  constructor(private classSpellService: ClassSpellService, private classService: ClassService, private spellService: SpellService){}

  @Get('byclass/:name')
  async readByClass(@Param('name') name: string): Promise<PathfinderClassSpell[]> {
    return this.classSpellService.getByClass(name);
  }

  @Get('byspell/:name')
  async readBySpell(@Param('name') name: string): Promise<PathfinderClassSpell[]> {
    return this.classSpellService.getBySpell(name);
  }

  @Post('add')
  async create(@Body() info: {spellName: string, className: string, spellLevel: number}): Promise<any> {
    const newClassSpell = new PathfinderClassSpell();
    newClassSpell.spellcaster_class = await this.classService.get(info.className);
    newClassSpell.spell = await this.spellService.get(info.spellName);
    newClassSpell.spell_level = info.spellLevel;

    return this.classSpellService.create(newClassSpell);
  }

  @Delete('remove')
  async delete(@Body() info: {spellName: string, className: string}): Promise<any> {
    return this.classSpellService.delete(info.className, info.spellName);
  }
}

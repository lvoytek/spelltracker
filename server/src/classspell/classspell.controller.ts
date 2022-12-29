import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

import { ClassSpellService } from './classspell.service';
import { ClassService } from 'src/class/class.service';
import { SpellService } from 'src/spell/spell.service';

import { PathfinderClassSpell } from 'src/entities/pathfinderclassspell.entity';
import { PathfinderClass } from 'src/entities/pathfinderclass.entity';
import { PathfinderSpell } from 'src/entities/pathfinderspell.entity';
import e from 'express';

@Controller('classspell')
export class ClassSpellController {
  constructor(private classSpellService: ClassSpellService, private classService: ClassService, private spellService: SpellService){}

  @Get('byclass/:name')
  async readByClass(@Param('name') name: string): Promise<PathfinderSpell[][]> {
    const classSpells = await this.classSpellService.getByClass(name);
    const maxSpellLevel = Math.max(...classSpells.map((classSpell) => classSpell.spell_level), 0);

    let spells = Array<PathfinderSpell[]>(maxSpellLevel);

    for(const classSpell of classSpells) {
      if(!spells[classSpell.spell_level])
        spells[classSpell.spell_level] = [classSpell.spell];
      else
        spells[classSpell.spell_level].push(classSpell.spell);
    }

    return spells;
  }

  @Get('byspell/:name')
  async readBySpell(@Param('name') name: string): Promise<PathfinderClass[][]> {
    const classSpells = await this.classSpellService.getBySpell(name);
    const maxSpellLevel = Math.max(...classSpells.map((classSpell) => classSpell.spell_level), 0);

    let classes = Array<PathfinderClass[]>(maxSpellLevel);

    for(const classSpell of classSpells) {
      if(!classes[classSpell.spell_level])
        classes[classSpell.spell_level] = [classSpell.spellcaster_class];
      else
        classes[classSpell.spell_level].push(classSpell.spellcaster_class);
    }

    return classes;
  }

  @Post('add')
  async create(@Body() info: {spellName: string, className: string, spellLevel: number}): Promise<any> {
    const newClassSpell = new PathfinderClassSpell();
    newClassSpell.spellcaster_class = await this.classService.get(info.className);
    newClassSpell.spell = await this.spellService.get(info.spellName);
    newClassSpell.spell_level = info.spellLevel;

    if(newClassSpell.spellcaster_class && newClassSpell.spell)
      return this.classSpellService.create(newClassSpell);
    else
      return {"error": "Invalid spell/class input"};
  }

  @Delete('remove')
  async delete(@Body() info: {spellName: string, className: string}): Promise<any> {
    return this.classSpellService.delete(info.className, info.spellName);
  }
}

import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CharacterService } from './character.service';
import { PathfinderCharacter } from 'src/entities/pathfindercharacter.entity';

@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService){}

  @Get(':id')
  async read(@Param('id') id: number): Promise<PathfinderCharacter> {
    return this.characterService.get(id);
  }

  @Post('add')
  async create(@Body() character: PathfinderCharacter): Promise<any> {
    return this.characterService.create(character);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.characterService.delete(id);
  }
}

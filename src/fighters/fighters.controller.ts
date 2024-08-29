import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FightersService } from './fighters.service';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fightersService: FightersService) {}

  @Post()
  create(@Body() createFighterDto: CreateFighterDto) {
    return this.fightersService.create(createFighterDto);
  }

  @Get()
  findAll() {
    return this.fightersService.findAll();
  }

  @Get(':name')
  findOneByName(@Param('name') name: string) {
    return this.fightersService.findOneByName(name);
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.fightersService.findOneById(+id);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFighterDto: UpdateFighterDto) {
    return this.fightersService.update(+id, updateFighterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightersService.remove(+id);
  }
}

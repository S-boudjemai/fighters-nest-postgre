import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FightsService } from './fights.service';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';

@Controller('fights')
export class FightsController {
  constructor(private readonly fightsService: FightsService) {}

  @Post()
  create(@Body() createFightDto: CreateFightDto) {
    return this.fightsService.create(createFightDto);
  }

  @Get()
  findAll() {
    return this.fightsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFightDto: UpdateFightDto) {
    return this.fightsService.update(+id, updateFightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.fightsService.remove(+id);
  }
}

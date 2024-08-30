import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefereesService } from './referees.service';
import { CreateRefereeDto } from './dto/create-referee.dto';
import { UpdateRefereeDto } from './dto/update-referee.dto';

@Controller('referees')
export class RefereesController {
  constructor(private readonly refereesService: RefereesService) {}

  @Post()
  create(@Body() createRefereeDto: CreateRefereeDto) {
    return this.refereesService.create(createRefereeDto);
  }

  @Get()
  findAll() {
    return this.refereesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refereesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefereeDto: UpdateRefereeDto) {
    return this.refereesService.update(+id, updateRefereeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refereesService.remove(+id);
  }
}

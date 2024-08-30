import { Injectable } from '@nestjs/common';
import { CreateRefereeDto } from './dto/create-referee.dto';
import { UpdateRefereeDto } from './dto/update-referee.dto';

@Injectable()
export class RefereesService {
  create(createRefereeDto: CreateRefereeDto) {
    return 'This action adds a new referee';
  }

  findAll() {
    return `This action returns all referees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} referee`;
  }

  update(id: number, updateRefereeDto: UpdateRefereeDto) {
    return `This action updates a #${id} referee`;
  }

  remove(id: number) {
    return `This action removes a #${id} referee`;
  }
}

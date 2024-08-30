import { Injectable } from '@nestjs/common';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fight } from './entities/fight.entity';
import { Fighter } from 'src/fighters/entities/fighter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FightsService {
  constructor(
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,

    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
  ) {}

  async create(createFightDto: CreateFightDto) {
    const firstFighter = await this.fighterRepository.findOne({
      where: { id: createFightDto.firstFighterId },
    });
    console.log(firstFighter);

    const secondFighter = await this.fighterRepository.findOne({
      where: { id: createFightDto.secondFighterId },
    });
    console.log(secondFighter);

    if (!firstFighter || !secondFighter) {
      throw new Error('Fighters not found');
    }
    const fight = this.fightRepository.create({
      firstFighterName: firstFighter.name,
      secondFighterName: secondFighter.name,
      date: createFightDto.date,
      referee: createFightDto.referee,
      category: createFightDto.category,
    });
    return await this.fightRepository.save(fight);
  }

  async findAll(): Promise<Fight[]> {
    return await this.fightRepository.find();
  }

  async update(id: number, updateFightDto: UpdateFightDto) {
    const fight = await this.fightRepository.findOne({ where: { id } });
    if (!fight) {
      throw new Error('Fight not found');
    }

    // Mise à jour des relations si les IDs sont fournis
    if (updateFightDto.firstFighterId !== undefined) {
      const firstFighter = await this.fighterRepository.findOne({
        where: { id: updateFightDto.firstFighterId },
      });
      if (!firstFighter) {
        throw new Error('First Fighter not found');
      }
      fight.firstFighterName = firstFighter.name;
    }

    if (updateFightDto.secondFighterId !== undefined) {
      const secondFighter = await this.fighterRepository.findOne({
        where: { id: updateFightDto.secondFighterId },
      });
      if (!secondFighter) {
        throw new Error('Second Fighter not found');
      }
      fight.secondFighterName = secondFighter.name;
    }

    // Utilisation de Object.assign pour les autres mises à jour
    Object.assign(fight, updateFightDto);

    await this.fightRepository.save(fight);

    return `Fight #${id} has been updated successfully.`;
  }

  remove(id: number) {
    this.fightRepository.delete(id);
    return `Fight #${id} has been deleted successfully.`;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from './entities/fighter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FightersService {
  findOne(name: string) {
    throw new Error('Method not implemented.');
  }
  // Injectrepository sert à injecter le repository (qui est une classe générique) de l'entité Fighter

  constructor(
    @InjectRepository(Fighter) private fighterRepository: Repository<Fighter>,
  ) {}

  // create a fighter entity and save it to the database with createFighterDto which is a data transfer object
  async create(createFighterDto: CreateFighterDto): Promise<Fighter> {
    const fighter = this.fighterRepository.create(createFighterDto);
    return await this.fighterRepository.save(fighter);
  }

  async findAll(): Promise<Fighter[]> {
    return await this.fighterRepository.find();
  }

  async findOneByName(name: string): Promise<Fighter> {
    const fighter = await this.fighterRepository.findOne({ where: { name } });
    if (!fighter) {
      throw new NotFoundException(`Fighter ${name} not found`);
    }
    return fighter;
  }

  async findOneById(id: number): Promise<Fighter> {
    const fighter = await this.fighterRepository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException(`Fighter #${id} not found`);
    }
    return fighter;
  }

  async update(id: number, updateFighterDto: UpdateFighterDto) {
    const fighter = await this.fighterRepository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException(`Fighter #${id} not found`);
    }
    // 3. Fusionner les nouvelles données avec l'existant
    Object.assign(fighter, updateFighterDto);

    // 4. Sauvegarder les modifications
    await this.fighterRepository.save(fighter);

    // 5. Retourner l'objet mis à jour
    return fighter;
  }

  remove(id: number) {
    this.fighterRepository.delete({ id });
  }
}

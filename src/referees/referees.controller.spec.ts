import { Test, TestingModule } from '@nestjs/testing';
import { RefereesController } from './referees.controller';
import { RefereesService } from './referees.service';

describe('RefereesController', () => {
  let controller: RefereesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefereesController],
      providers: [RefereesService],
    }).compile();

    controller = module.get<RefereesController>(RefereesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

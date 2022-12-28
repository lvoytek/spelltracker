import { Test, TestingModule } from '@nestjs/testing';
import { ClassSpellController } from './classspell.controller';

describe('ClassSpellController', () => {
  let controller: ClassSpellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassSpellController],
    }).compile();

    controller = module.get<ClassSpellController>(ClassSpellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

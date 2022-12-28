import { Test, TestingModule } from '@nestjs/testing';
import { ClassSpellService } from './classspell.service';

describe('ClassSpellService', () => {
  let service: ClassSpellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassSpellService],
    }).compile();

    service = module.get<ClassSpellService>(ClassSpellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

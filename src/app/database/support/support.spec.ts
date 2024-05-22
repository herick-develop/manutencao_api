import { Test, TestingModule } from '@nestjs/testing';
import { Support } from './support.provider';

describe('Support', () => {
  let provider: Support;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Support],
    }).compile();

    provider = module.get<Support>(Support);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

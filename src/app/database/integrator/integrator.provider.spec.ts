import { Test, TestingModule } from '@nestjs/testing';
import { Integrator } from './integrator.provider';

describe('Integrator', () => {
  let provider: Integrator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Integrator],
    }).compile();

    provider = module.get<Integrator>(Integrator);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

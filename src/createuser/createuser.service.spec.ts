import { Test, TestingModule } from '@nestjs/testing';
import { CreateuserService } from './createuser.service';

describe('CreateuserService', () => {
  let service: CreateuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateuserService],
    }).compile();

    service = module.get<CreateuserService>(CreateuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

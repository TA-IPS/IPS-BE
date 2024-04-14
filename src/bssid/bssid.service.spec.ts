import { Test, TestingModule } from '@nestjs/testing';
import { BssidService } from './bssid.service';

describe('BssidService', () => {
  let service: BssidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BssidService],
    }).compile();

    service = module.get<BssidService>(BssidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

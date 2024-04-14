import { Test, TestingModule } from '@nestjs/testing';
import { BssidController } from './bssid.controller';
import { BssidService } from './bssid.service';

describe('BssidController', () => {
  let controller: BssidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BssidController],
      providers: [BssidService],
    }).compile();

    controller = module.get<BssidController>(BssidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

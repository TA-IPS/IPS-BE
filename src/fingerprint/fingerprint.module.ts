import { Module } from '@nestjs/common';
import { FingerprintService } from './fingerprint.service';
import { FingerprintController } from './fingerprint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fingerprint } from './entities/fingerprint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fingerprint])],
  controllers: [FingerprintController],
  providers: [FingerprintService],
})
export class FingerprintModule {}

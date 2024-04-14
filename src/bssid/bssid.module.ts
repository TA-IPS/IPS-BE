import { Module } from '@nestjs/common';
import { BssidService } from './bssid.service';
import { BssidController } from './bssid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bssid } from './entities/bssid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bssid])],
  controllers: [BssidController],
  providers: [BssidService],
  exports: [BssidService]
})
export class BssidModule {}

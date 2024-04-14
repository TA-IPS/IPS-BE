import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBssidDto } from './dto/create-bssid.dto';
import { UpdateBssidDto } from './dto/update-bssid.dto';
import { Bssid } from './entities/bssid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BssidService {
  constructor(
    @InjectRepository(Bssid)
    private bssidRepository: Repository<Bssid>,
  ) {}
  create(createBssidDto: CreateBssidDto) {
    return 'This action adds a new bssid';
  }

  async createMany(createBssidDto: CreateBssidDto[]) {
    return await this.bssidRepository.upsert(createBssidDto, ['bssid']);
  }

  findAll() {
    return `This action returns all bssid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bssid`;
  }

  update(id: number, updateBssidDto: UpdateBssidDto) {
    return `This action updates a #${id} bssid`;
  }

  remove(id: number) {
    return `This action removes a #${id} bssid`;
  }
}

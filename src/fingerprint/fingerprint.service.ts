import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fingerprint } from './entities/fingerprint.entity';
import { CreateFingerprintDto } from './dto/create-fingerprint.dto';
import { UpdateFingerprintDto } from './dto/update-fingerprint.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FingerprintService {
  constructor(
    @InjectRepository(Fingerprint)
    private fingerprintRepository: Repository<Fingerprint>,
  ) {}
  async create(createFingerprintDto: CreateFingerprintDto) {
    console.log(createFingerprintDto)
    const result = await this.fingerprintRepository.save(createFingerprintDto);
  }

  async findAll() {
    return await this.fingerprintRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fingerprint`;
  }

  update(id: number, updateFingerprintDto: UpdateFingerprintDto) {
    return `This action updates a #${id} fingerprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} fingerprint`;
  }

  async getGrids() {
    const res = await this.fingerprintRepository.createQueryBuilder('fingerprint')
      .select(['x', 'y', 'z'])
      .distinct(true)
      .getRawMany();

    const groupedResults: Record<number, { x: number, y: number }[]> = {};

    res.forEach(result => {
      const { x, y, z } = result;
      if (!groupedResults[z]) {
        groupedResults[z] = [];
      }
      groupedResults[z].push({ x, y });
    });
    return groupedResults;
  }
}

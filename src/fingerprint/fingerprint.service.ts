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
    const result = await this.fingerprintRepository.save(createFingerprintDto);
  }

  findAll() {
    return `This action returns all fingerprint`;
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
}

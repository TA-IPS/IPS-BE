import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FingerprintService } from './fingerprint.service';
import { CreateFingerprintDto } from './dto/create-fingerprint.dto';
import { UpdateFingerprintDto } from './dto/update-fingerprint.dto';
import { BssidService } from 'src/bssid/bssid.service';

@Controller('/fingerprint')
export class FingerprintController {
  constructor(private readonly fingerprintService: FingerprintService,
              private readonly bssidService: BssidService) {}

  @Post()
  create(@Body() createFingerprintDto: CreateFingerprintDto) {
    this.bssidService.createMany(createFingerprintDto.wifi)
    return this.fingerprintService.create(createFingerprintDto);
  }

  @Get()
  findAll() {
    return this.fingerprintService.findAll();
  }

  @Get('/grid')
  getGrids() {
    return this.fingerprintService.getGrids();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.fingerprintService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateFingerprintDto: UpdateFingerprintDto) {
    return this.fingerprintService.update(+id, updateFingerprintDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.fingerprintService.remove(+id);
  }
}

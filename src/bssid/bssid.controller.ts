import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BssidService } from './bssid.service';
import { CreateBssidDto } from './dto/create-bssid.dto';
import { UpdateBssidDto } from './dto/update-bssid.dto';

@Controller('bssid')
export class BssidController {
  constructor(private readonly bssidService: BssidService) {}

  @Post()
  create(@Body() createBssidDto: CreateBssidDto) {
    return this.bssidService.create(createBssidDto);
  }

  @Get()
  findAll() {
    return this.bssidService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bssidService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBssidDto: UpdateBssidDto) {
    return this.bssidService.update(+id, updateBssidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bssidService.remove(+id);
  }
}

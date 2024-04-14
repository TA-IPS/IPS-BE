import { PartialType } from '@nestjs/mapped-types';
import { CreateBssidDto } from './create-bssid.dto';

export class UpdateBssidDto extends PartialType(CreateBssidDto) {}

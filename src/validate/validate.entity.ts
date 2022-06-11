import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NumberDetails {
  @ApiProperty({ required: true })
  @Expose()
  valid: string;

  @ApiProperty({ required: true })
  @Expose()
  country_prefix: string;

  @ApiProperty({ required: true })
  @Expose()
  country_code: string;

  @ApiProperty({ required: true })
  @Expose()
  country_name: string;

  @ApiProperty({ required: true })
  @Expose()
  location: string;

  @ApiProperty({ required: true })
  @Expose()
  carrier: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserEntity {
  @ApiProperty({ required: false })
  @Expose()
  _id: number;

  @ApiProperty({ required: true })
  @Expose()
  userId: number;

  @ApiProperty({ required: true })
  @Expose()
  countryCode: string;

  @ApiProperty({ required: true })
  @Expose()
  countryName: string;

  @ApiProperty({ required: true })
  @Expose()
  operatorName: string;

  @ApiProperty({ required: true })
  @Expose()
  customerName: string;

  @ApiProperty({ required: true })
  @Expose()
  customerNumber: string;
}

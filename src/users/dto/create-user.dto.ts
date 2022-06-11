import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The country code',
    type: 'string',
    example: '91',
  })
  public countryCode: string;

  @ApiProperty({
    description: 'The country name',
    type: 'string',
    example: 'india',
  })
  public countryName: string;

  @ApiProperty({
    description: 'The carrier',
    type: 'string',
    example: 'jio',
  })
  public operatorName: string;

  @ApiProperty({
    description: 'The name of customer',
    required: true,
    type: 'string',
    example: 'jhon',
  })
  public customerName: string;

  @ApiProperty({
    description: 'The name of customer',
    required: true,
    type: 'string',
    example: '9797962096',
  })
  public customerNumber: string;
}

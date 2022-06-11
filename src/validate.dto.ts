import { IsInt, IsNotEmpty, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ValidateNumberDTO {
  @ApiProperty({
    description: 'The number to be validated',
    required: true,
    type: 'number',
    example: '917006921375',
  })
  @IsInt()
  @Min(10)
  @Type(() => Number)
  public number = 1234567890;
}

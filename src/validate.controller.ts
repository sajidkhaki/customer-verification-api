import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ValidateNumberDTO } from './validate.dto';
import { NumberDetails } from './validate.entity';
import { ValidateService } from './validate.service';


@Controller('/validate')
export class ValidateController {
  constructor(private readonly validateService:ValidateService ) {}

  @Get()
  @ApiOkResponse({
    description: 'Returns validate number details',
    schema: { $ref: getSchemaPath(NumberDetails) },
  })
  
  public async validateNumber(
    @Query(new ValidationPipe({ transform: true })) query: ValidateNumberDTO,
  ): Promise<any> {
    return await this.validateService.validate(query);
  }
}

import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ValidateNumberDTO } from '@validate/validate.dto';
import { NumberDetails } from '@validate/validate.entity';
import { ValidateService } from '@validate/validate.service';

@Controller('/validate')
@ApiTags('/Number-validate')
export class ValidateController {
  constructor(private readonly validateService: ValidateService) {}

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

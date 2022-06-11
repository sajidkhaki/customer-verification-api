import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ValidateNumberDTO } from './validate.dto';
import { ValidateService } from './validate.service';


@Controller('/validate')
export class ValidateController {
  constructor(private readonly validateService:ValidateService ) {}

  @Get()
  public async validateNumber(
    @Query(new ValidationPipe({ transform: true })) query: ValidateNumberDTO,
  ): Promise<any> {
    return await this.validateService.validate(query);
  }
}

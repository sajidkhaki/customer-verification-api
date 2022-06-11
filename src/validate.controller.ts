import { Controller, Get } from '@nestjs/common';
import { ValidateService } from './validate.service';


@Controller('/validate')
export class ValidateController {
  constructor(private readonly validateService:ValidateService ) {}

  @Get()
  getHello() {
    return this.validateService.getHello();
  }
}

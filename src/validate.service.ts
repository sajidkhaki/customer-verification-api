import { Injectable } from "@nestjs/common";

@Injectable()
export class ValidateService {
    public async getHello(){
        return 'Hello'
      }
}


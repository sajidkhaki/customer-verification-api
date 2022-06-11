import {HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Params } from './validate.interface';

@Injectable()
export class ValidateService {
  private readonly baseURL: string = this.config.get('Validate_URL');
  private readonly apikey: string = this.config.get('apikey');

  constructor(private readonly config: ConfigService) {}

  public async validate(params: Params) {
    const { number } = params;

    let config = await this.getAxios(number);

    try {
      let response = await axios(config);
      const { data } = response;
      if (data.valid) {
        return data;
      } else {
        throw new HttpException(`Invalid Number`, 400);
      }
    } catch (error) {
      throw error.message;
    }
  }

  private async getAxios(number: Number) {
    return {
      method: 'get',
      url: `${this.baseURL}?number=${number}`,
      headers: {
        apikey: `${this.apikey}`,
      },
    };
  }
}

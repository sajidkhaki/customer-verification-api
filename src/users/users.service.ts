import { Injectable } from '@nestjs/common';

import { User } from '@users/schemas/user.schema';
import { UsersRepository } from '@users/users.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(data: any): Promise<User> {
    const {
      countryCode,
      countryName,
      operatorName,
      customerName,
      customerNumber,
    } = data;
    return this.usersRepository.create({
      userId: uuidv4(),
      countryCode,
      countryName,
      operatorName,
      customerName,
      customerNumber,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}

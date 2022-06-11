import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '@users/schemas/user.schema';
import { UsersRepository } from '@users/users.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    let found = await this.usersRepository.findOne({ userId });
    if (found) {
      return found;
    } else {
      throw new NotFoundException();
    }
  }

  async getUsers(): Promise<User[]> {
    let found = await this.usersRepository.find({});
    if (found) {
      return found;
    } else {
      throw new NotFoundException();
    }
  }

  async createUser(data: any): Promise<User> {
    const {
      countryCode,
      countryName,
      operatorName,
      customerName,
      customerNumber,
    } = data;
    return await this.usersRepository.create({
      userId: uuidv4(),
      countryCode,
      countryName,
      operatorName,
      customerName,
      customerNumber,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    let found = await this.usersRepository.findOneAndUpdate(
      { userId },
      userUpdates,
    );
    if (found) {
      return found;
    } else {
      throw new NotFoundException();
    }
  }

  async deleteUser(userId: string): Promise<any> {
    let response = await this.usersRepository.delete({ userId });
    if (response) {
      await this.usersRepository.delete({ userId });
    } else {
      throw new NotFoundException();
    }
  }
}

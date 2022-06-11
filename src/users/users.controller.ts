import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { CreateUserDto } from '@users/dto/create-user.dto';
import { UpdateUserDto } from '@users/dto/update-user.dto';

import { UserEntity } from '@users/entity/user.entity';
import { User } from '@users/schemas/user.schema';
import { UsersService } from '@users/users.service';

@Controller('/users')
@ApiTags('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  @ApiOkResponse({
    description: 'Returns specific user based on userId',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  @ApiOkResponse({
    description: 'returns list of users',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @ApiOkResponse({
    description: 'creates a user',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOkResponse({
    description: 'updates a user',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @ApiOkResponse({
    description: 'deletes a user',
  })
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.deleteUser(userId);
  }
}

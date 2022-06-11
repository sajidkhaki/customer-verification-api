import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { CreateUserDto } from '@users/dto/create-user.dto';
import { UpdateUserDto } from '@users/dto/update-user.dto';

import { UserEntity } from '@users/entity/user.entity';
import { User } from '@users/schemas/user.schema';
import { UsersService } from '@users/users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  @ApiOkResponse({
    description: 'Returns specific user based on Id',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  @ApiOkResponse({
    description: 'Returns list of users',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
  @ApiOkResponse({
    description: 'Create a user',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOkResponse({
    description: 'update a user',
    schema: { $ref: getSchemaPath(UserEntity) },
  })
  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}

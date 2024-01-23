import { Controller, Post, Get, Body, Response, Session, Request, Req, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';
import { UserEntity } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import { IsAuthorizedMiddleware } from './middleware/IsAuthorizedMiddleware';

@Controller('auth')
export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('registration')
  async postRegistration(@Request() request, @Response() response): Promise<string> {
    const userEntity: UserEntity = Object.assign(new UserEntity(), request.body);
    const user = await this.userRepository.create(userEntity);
    return response.send(JSON.stringify(user));
  }

  @Post('login')
  async postLogin(@Request() request, @Response() response): Promise<string> {
    const userEntity = Object.assign(new UserEntity(), request.body);
    const user = await this.userRepository.find(userEntity);
    const token = await bcrypt.hash(user[0].password, 1);
    request.session['token'] = token;
    response.cookie('token', token);
    return response.send(JSON.stringify(user.length > 0 ? user[0] : {response: 'Неверные логин или пароль'}));
  }

  @Post('logout')
  @UseGuards(IsAuthorizedMiddleware)
  async postLogout(@Request() request, @Response() response): Promise<string> {

    return response.send(JSON.stringify({'response': 'OK'}));
  }

  @Get('getAuthData')
  async getAuthData(@Request() request, @Response() response): Promise<any> {
    return response.send(JSON.stringify(request.session));
  }
}
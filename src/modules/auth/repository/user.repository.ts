import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async find(userData: UserEntity): Promise<UserEntity[]> {
    return this.userRepository.find({
      where: {
        username: userData.username,
        password: userData.password
      }
    });
  }

  async create(userData: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(userData);
  }
}
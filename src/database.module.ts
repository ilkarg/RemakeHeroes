import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/auth/entity/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '192.168.100.10',
            port: 3306,
            username: 'test',
            password: '',
            database: 'asd',
            entities: [UserEntity],
            synchronize: true,
        }),
    ],
})
export class DatabaseModule {}
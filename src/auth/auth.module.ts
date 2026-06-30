import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProviders } from './user.provider';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [...UserProviders, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    console.log(authCredentialsDto);
    const newUser = this.userRepository.create({
      username: authCredentialsDto.username,
      password: authCredentialsDto.password,
    });
    return await this.userRepository.save(newUser);
  }
}

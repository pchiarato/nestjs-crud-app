import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() authCredentialDto: AuthCredentialsDto): Promise<User> {
    return this.authService.signUp(authCredentialDto);
  }
  @Post('/signin')
  signIn(@Body() authCredentialDto: AuthCredentialsDto): Promise<User> {
    return this.authService.signIn(authCredentialDto);
  }
}

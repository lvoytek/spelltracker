import { PassportStrategy } from '@nestjs/passport';
import { Strategy} from 'passport-jwt';
import { Injectable } from '@nestjs/common';

import { jwtConfig } from './jwt.config';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private userService: UserService) {
    super(jwtConfig);
  }

  async validate(payload: any) {
    const user =  await this.userService.get(payload.email);
    return user;
  }
}

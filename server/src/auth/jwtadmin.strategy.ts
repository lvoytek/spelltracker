import { PassportStrategy } from '@nestjs/passport';
import { Strategy} from 'passport-jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { jwtConfig } from './jwt.config';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {

  constructor(private userService: UserService) {
    super(jwtConfig);
  }

  async validate(payload: any) {
    const user =  await this.userService.get(payload.email);

    if(!user.admin)
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    return user;
  }
}

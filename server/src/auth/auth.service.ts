import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async googleLogin(req) {
    if (!req.user)
      return { error: 'Authentication Failure' };

    const payload = {email: req.user.email, sub: req.user.accessToken};
    const existingUser = await this.userService.get(req.user.email);

    if(!existingUser) {
      const newUser = await this.userService.create({email: req.user.email, admin: false, characters: []});

      if(newUser)
        return {
          new: true,
          accessToken: this.jwtService.sign(payload)
        };

      return { error: 'Server Error' };
    }

    return {
      new: false,
      accessToken: this.jwtService.sign(payload)
    };
  }
}

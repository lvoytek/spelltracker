import { Injectable } from '@nestjs/common';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService extends UserService {
  async googleLogin(req) {
    if (!req.user)
      return { error: 'Authentication Failure' };

    const existingUser = await super.get(req.user.email);

    if(!existingUser) {
      const newUser = await super.create({email: req.user.email, admin: false, characters: []});

      if(newUser)
        return {
          new: true,
          user: newUser
        };

      return { error: 'Server Error' };
    }

    return {
      new: false,
      user: existingUser
    };
  }
}

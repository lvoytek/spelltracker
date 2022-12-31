import { ExtractJwt } from 'passport-jwt';
import { config } from 'src/config';

export const jwtConfig = {
  secretOrKey: config.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: false
};

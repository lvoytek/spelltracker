import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { config } from './config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GoogleStrategy } from './auth/google.strategy'
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtAdminStrategy } from './auth/jwtadmin.strategy';

import { PathfinderClass } from './entities/pathfinderclass.entity';
import { PathfinderClassSpell } from './entities/pathfinderclassspell.entity';
import { PathfinderSpell } from './entities/pathfinderspell.entity';
import { PathfinderCharacter } from './entities/pathfindercharacter.entity';
import { User } from './entities/user.entity';

import { SpellService } from './spell/spell.service';
import { SpellController } from './spell/spell.controller';
import { ClassService } from './class/class.service';
import { ClassController } from './class/class.controller';
import { ClassSpellService } from './classspell/classspell.service';
import { ClassSpellController } from './classspell/classspell.controller';
import { CharacterService } from './character/character.service';
import { CharacterController } from './character/character.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(
    (config.DB_TYPE != "sqlite") ?
    {
      type: config.DB_TYPE as "mysql" | "mariadb" | "postgres" || "mysql",
      database: config.DB_NAME,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    } :
    {
      type: "sqlite",
      database: config.DB_NAME,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    }
    ),
    TypeOrmModule.forFeature([PathfinderClass, PathfinderSpell, PathfinderClassSpell, PathfinderCharacter, User]),
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: config.JWT_EXPIRE_TIME }
    }),
  ],
  controllers: [AppController, SpellController, ClassController, ClassSpellController, CharacterController, AuthController, UserController],
  providers: [AppService, GoogleStrategy, JwtStrategy, JwtAdminStrategy, SpellService, ClassService, ClassSpellService, CharacterService, AuthService, UserService],
})
export class AppModule {}

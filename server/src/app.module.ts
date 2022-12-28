import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PathfinderClass } from './entities/pathfinderclass.entity';
import { PathfinderClassSpell } from './entities/pathfinderclassspell.entity';
import { PathfinderSpell } from './entities/pathfinderspell.entity';

import { SpellService } from './spell/spell.service';
import { SpellController } from './spell/spell.controller';

@Module({
  imports: [TypeOrmModule.forRoot(
    (process.env["DB_TYPE"] && process.env["DB_TYPE"] != "sqlite") ?
    {
      type: process.env["DB_TYPE"] as "mysql" | "mariadb" | "postgres" || "mysql",
      database: process.env["DB_NAME"] || "spelltracker",
      username: process.env["DB_USERNAME"] || "root",
      password: process.env["DB_PASSWORD"] || "",
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
    } :
    {
      type: "sqlite",
      database: process.env["DB_NAME"] || "../db.sqlite3",
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
    }
    ),
    TypeOrmModule.forFeature([PathfinderClass, PathfinderSpell, PathfinderClassSpell])
  ],
  controllers: [AppController, SpellController],
  providers: [AppService, SpellService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PathfinderClass } from './entities/pathfinderclass.entity';
import { PathfinderClassSpell } from './entities/pathfinderclassspell.entity';
import { PathfinderSpell } from './entities/pathfinderspell.entity';

import { SpellService } from './spell/spell.service';
import { SpellController } from './spell/spell.controller';
import { ClassService } from './class/class.service';
import { ClassController } from './class/class.controller';
import { ClassSpellService } from './classspell/classspell.service';
import { ClassSpellController } from './classspell/classspell.controller';

@Module({
  imports: [TypeOrmModule.forRoot(
    (process.env["DB_TYPE"] && process.env["DB_TYPE"] != "sqlite") ?
    {
      type: process.env["DB_TYPE"] as "mysql" | "mariadb" | "postgres" || "mysql",
      database: process.env["DB_NAME"] || "spelltracker",
      username: process.env["DB_USERNAME"] || "root",
      password: process.env["DB_PASSWORD"] || "",
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    } :
    {
      type: "sqlite",
      database: process.env["DB_NAME"] || "../db.sqlite3",
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    }
    ),
    TypeOrmModule.forFeature([PathfinderClass, PathfinderSpell, PathfinderClassSpell])
  ],
  controllers: [AppController, SpellController, ClassController, ClassSpellController],
  providers: [AppService, SpellService, ClassService, ClassSpellService],
})
export class AppModule {}

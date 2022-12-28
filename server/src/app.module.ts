import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

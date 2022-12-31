import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const PORT: number = parseInt(config.PORT, 10);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '@swagger/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = app.get(ConfigService);

  SwaggerModule.setup('docs', app, createDocument(app), {
    swaggerOptions: {
      tagsSorter: 'alpha',
    },
  });
  await app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on port ${config.get('SERVER_PORT')}`);
  });
}
bootstrap();

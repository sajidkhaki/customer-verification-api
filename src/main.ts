import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from '@swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ValidateController } from './validate.controller';
import { ValidateService } from './validate.service';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration],
      validationSchema,
    })
  ],
  controllers: [ValidateController],
  providers: [ValidateService],
})
export class AppModule {}

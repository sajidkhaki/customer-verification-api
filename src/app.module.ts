import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ValidateController } from '@validate/validate.controller';
import { ValidateService } from '@validate/validate.service';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    MongooseModule.forRoot('mongodb://mongo:27017/users'),
    UsersModule,
  ],
  controllers: [ValidateController],
  providers: [ValidateService],
})
export class AppModule {}

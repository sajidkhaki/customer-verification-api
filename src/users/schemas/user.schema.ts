import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  countryCode: string;

  @Prop()
  countryName: string;

  @Prop()
  operatorName: string;

  @Prop()
  customerName: string;

  @Prop()
  customerNumber: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

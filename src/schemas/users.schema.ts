import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema() // 1 schema đại diện cho 1 collection
export class User {

  @Prop({required: true})
  user_id: string;

  @Prop()
  name: string;

  @Prop()
  born_year: string;

  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
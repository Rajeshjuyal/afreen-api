import * as mongoose from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User {
  email: string;
  name: string;
  role: string;
  passworrd: string;
}
export class CredentiaslsDto {
  @IsEmail()
  @IsNotEmpty()
  email: String;
  @IsNotEmpty()
  password: String;
}

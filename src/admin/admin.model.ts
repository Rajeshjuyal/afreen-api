import * as mongoose from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
export const AdminSchema = new mongoose.Schema({
  admin_id: { type: String, required: true },
  name: { type: String, required: true },
  Aboutus: { type: String, required: true },
});

export interface Admin {
  admin_id: string;
  name: string;
  Aboutus: string;
}
export class CredentialsDto {
  @IsEmail()
  @IsNotEmpty()
  email: String;
  @IsNotEmpty()
  password: String;
}

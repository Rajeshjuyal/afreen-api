import { Injectable} from '@nestjs/common';
import {  PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { validate } from 'class-validator';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
      secret: '123456789sonali',
    });
  }
}
async validate(payload) {
    const { id } = payload;
    const admin = this.adminModel.findOne({
      id,
    });
    return admin;
  }

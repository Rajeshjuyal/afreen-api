import { Injectable, ValidationPipe } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel('Admin') private readonly adminModel: Model<any>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
      secret: '12345678sonali',
    });
  }

  async validate(payload) {
    const { id } = payload;
    const admin = this.adminModel.findOne({
      id,
    });
    return admin;
  }
}

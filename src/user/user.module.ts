import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../admin/jwt.strategy';
import { AuthService } from 'src/admin/AuthService';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),

    JwtModule.register({
      secret: '123456789sonali',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],

  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [PassportModule, JwtStrategy],
})
export class UserModule {}

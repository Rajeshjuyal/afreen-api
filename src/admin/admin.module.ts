import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './admin.model';
import { PassportModule } from '@nestjs/passport';

import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
    JwtModule.register({
      secret: '12345678910sonali',
      signOptions: {
        expiresIn: '4h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [PassportModule],
})
export class AdminModule {}

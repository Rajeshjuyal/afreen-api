import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerSchema } from './banner.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Banner', schema: BannerSchema }]),
  ],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}

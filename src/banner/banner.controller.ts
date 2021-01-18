import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { Banner } from './banner.model';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  create(@Body() bannerdata: Banner) {
    return this.bannerService.create(bannerdata);
  }

  @Get()
  findAll() {
    return this.bannerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() bannerdata: Banner) {
    return this.bannerService.update(id, bannerdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerService.remove(id);
  }
}

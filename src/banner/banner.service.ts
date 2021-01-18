import { Injectable, HttpStatus } from '@nestjs/common';
import { Banner } from './banner.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class BannerService {
  banners: Banner[] = [];
  constructor(
    @InjectModel('Banner') private readonly bannerModel: Model<any>,
  ) {}
  public async create(bannerdata: Banner) {
    var banner1 = await this.bannerModel.create(bannerdata);
    return {
      response_code: HttpStatus.OK,
      response_data: banner1,
    };
  }

  public async findAll() {
    var banners = await this.bannerModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: banners,
    };
  }

  public async findOne(id: string) {
    var banners = await this.bannerModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: banners,
    };
  }

  public async update(id: string, bannerdata: Banner) {
    var banners = await this.bannerModel.findByIdAndUpdate(id, bannerdata);
    return {
      response_code: HttpStatus.OK,
      response_data: banners,
    };
  }

  public async remove(id: string) {
    var banners = await this.bannerModel.findByIdAndDelete(id);
    banners.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: banners,
    };
  }
}

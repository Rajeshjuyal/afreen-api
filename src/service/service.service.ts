import { Injectable, HttpStatus } from '@nestjs/common';
import { Service } from './service.model';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { response } from 'express';

@Injectable()
export class ServiceService {
  services: Service[] = [];
  constructor(
    @InjectModel('Service') private readonly serviceModel: Model<any>,
  ) {}
  public async create(servicedata: Service) {
    var services = await this.serviceModel.create(servicedata);
    return {
      response_code: HttpStatus.OK,
      response_data: services,
    };
  }

  public async findAll() {
    var services1 = await this.serviceModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: services1,
    };
  }

  public async findOne(id: string) {
    var services1 = await this.serviceModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: services1,
    };
  }

  public async update(id: string, servicesdata: Service) {
    var services1 = await this.serviceModel.findByIdAndUpdate(id, servicesdata);
    return {
      response_code: HttpStatus.OK,
      response_data: services1,
    };
  }

  public async remove(id: string) {
    var services1 = await this.serviceModel.findByIdAndDelete(id);
    services1.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: services1,
    };
  }
}

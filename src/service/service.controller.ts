import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './service.model';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() servicedata: Service) {
    return this.serviceService.create(servicedata);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() servicedata: Service) {
    return this.serviceService.update(id, servicedata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}

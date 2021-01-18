import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.model';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() admindata: Admin) {
    return this.adminService.create(admindata);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() admindata: Admin) {
    return this.adminService.update(id, admindata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}

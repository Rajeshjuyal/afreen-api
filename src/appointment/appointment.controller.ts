import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.model';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() Appointmentdata: Appointment) {
    return this.appointmentService.create(Appointmentdata);
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body()appointmentdata: Appointment) {
    return this.appointmentService.update(id, appointmentdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}

import { Injectable, HttpStatus } from '@nestjs/common';
import { Appointment } from './appointment.model';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppointmentService {
  appointments: Appointment[] = [];
  constructor(
    @InjectModel('Appointment') private readonly appointmentModel: Model<any>,
  ) {}
  public async create(appointmentdata: Appointment) {
    var appoints = await this.appointmentModel.create(appointmentdata);
    return {
      response_code: HttpStatus.OK,
      response_data: appoints,
    };
  }

  public async findAll() {
    var appoints = await this.appointmentModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: appoints,
    };
  }

  public async findOne(id: string) {
    var appoints = await this.appointmentModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: appoints,
    };
  }

  public async update(id: string, appointmentdata: Appointment) {
    var appoints = await this.appointmentModel.findByIdAndUpdate(
      id,
      appointmentdata,
    );

    return {
      response_code: HttpStatus.OK,
      response_data: appoints,
    };
  }

  public async remove(id: string) {
    var appoints = await this.appointmentModel.findByIdAndDelete(id);
    appoints.remove;
    return {
      response_code: HttpStatus.OK,
      response_data: appoints,
    };
  }
}

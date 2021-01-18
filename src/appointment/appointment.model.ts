import * as mongoose from 'mongoose';
export const AppointmentSchema = new mongoose.Schema({
  time: { type: String, required: true },
});

export class Appointment {
  constructor
  (public time: string)
   {}
}

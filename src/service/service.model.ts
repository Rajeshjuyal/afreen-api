import * as mongoose from 'mongoose';
export const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image_url: { type: String, required: true },
  file_path_id: { true: String, required: true },
  service_description: { true: String, required: true },
});

export interface Service {
  name: string;
  price: string;
  image_url: string;
  file_path_id: string;
  service_description: string;
}

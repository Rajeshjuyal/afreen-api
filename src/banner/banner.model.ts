import * as mongoose from 'mongoose';
export const BannerSchema = new mongoose.Schema({
  image_url: { type: String, required: true },
  banner_id: { type: String, required: true },
  File_path_id: { type: String, required: true },
});

export interface Banner {
  image_url: string;
  banner_id: string;
  File_path_id: string;
}

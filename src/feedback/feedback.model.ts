import * as mongoose from 'mongoose';
export const FeedbackSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

export class Feedback {
  constructor(public message: string) {}
}

import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Feedback, FeedbackSchema } from './feedback.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feedback', schema: FeedbackSchema }]),
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}

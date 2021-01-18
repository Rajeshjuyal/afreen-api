import { Injectable, HttpStatus } from '@nestjs/common';
import { Feedback } from './feedback.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FeedbackService {
  feedbacks: Feedback[] = [];
  constructor(
    @InjectModel('Feedback') private readonly feedbackModel: Model<any>,
  ) {}
  public async create(feedbackdata: Feedback) {
    var feedback1 = await this.feedbackModel.create(feedbackdata);
    return {
      response_code: HttpStatus.OK,
      response_data: feedback1,
    };
  }

  public async findAll() {
    var feedback1 = await this.feedbackModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: feedback1,
    };
  }

  public async findOne(id: string) {
    var feedbacks1 = await this.feedbackModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: feedbacks1,
    };
  }

  public async update(id: string, feedbackdata: Feedback) {
    var feedback2 = await this.feedbackModel.findByIdAndUpdate(
      id,
      feedbackdata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: feedback2,
    };
  }

  public async remove(id: string) {
    var feedback3 = await this.feedbackModel.findByIdAndDelete(id);
    feedback3.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: feedback3,
    };
  }
}

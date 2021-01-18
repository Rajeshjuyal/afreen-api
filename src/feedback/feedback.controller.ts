import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.model';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  create(@Body() feedbackdata: Feedback) {
    return this.feedbackService.create(feedbackdata);
  }

  @Get()
  findAll() {
    return this.feedbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbackService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() feedbackdata: Feedback) {
    return this.feedbackService.update(id, feedbackdata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbackService.remove(id);
  }
}

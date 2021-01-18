import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerModule } from './banner/banner.module';
import { ServiceModule } from './service/service.module';
import { AppointmentModule } from './appointment/appointment.module';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri:
          'mongodb+srv://<Rajesh1234>:<Rajesh1234>@cluster0.zelwy.mongodb.net/<afreen-api>?retryWrites=true&w=majority',
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    }),

    AdminModule,

    BannerModule,

    ServiceModule,

    AppointmentModule,

    FeedbackModule,

    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

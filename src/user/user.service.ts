import { Injectable, HttpStatus } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CredentialsDto } from '../admin/admin.model';
import {AuthService} from '../admin/AuthService'

@Injectable()
export class UserService {
  users: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}
  public async create(userdata: User) {
    var user = await this.userModel.create(userdata);
    return {
      response_code: HttpStatus.OK,
      response_data: user,
    };
  }

  public async findAll() {
    var users1 = await this.userModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: users1,
    };
  }

  public async findOne(id: String) {
    var user1 = await this.userModel.findById(id);

    return {
      response_code: HttpStatus.OK,
      response_data: user1,
    };
  }

  public async update(id: String, userdata: User) {
    var user2 = await this.userModel.findByIdAndUpdate(id, userdata);
    return {
      response_code: HttpStatus.OK,
      response_data: user2,
    };
  }

  public async remove(id: String) {
    var user3 = await this.userModel.findByIdAndDelete(id);
    user3.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: user3,
    };
  }
  public async validateUserCredentials(credentials: CredentialsDto) {
    credentials.email = credentials.email.toLowerCase();
    const admin = await this.userModel.findOne({
      email: credentials.email,
    });
    if (!users) {
      return {
        response_code: HttpStatus.UNAUTHORIZED,
        response_data: `User with email ${credentials.email} is not registered`,
      };
    } else {
      const passwordMatch = await this.authService.verifyPassword(
        credentials.password,
        admin.password,
      );
      const body = {
        token: null,
        _id: null,
      };
      if (passwordMatch) {
        body._id = admin._id;
        body.token = await this.authService.generateAccessToken(admin._id);
        return { 
          response_code: HttpStatus.OK, 
          response_data: body };
      } else {
        return {
          response_code: HttpStatus.UNAUTHORIZED,
          response_data: 'enter a valid password',
        };
      }
    }
  }
}
}
}

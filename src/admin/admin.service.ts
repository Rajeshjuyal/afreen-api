import { Injectable, HttpStatus } from '@nestjs/common';
import { Admin } from './admin.model';
import { AuthService } from './AuthService';
import { CredentialsDto } from './admin.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
  admins: Admin[] = [];
  constructor(
    @InjectModel('Admin')
    private readonly adminModel: Model<any>,
  ) {}
  public async create(admindata: Admin) {
    var admin1 = await this.adminModel.create(admindata);
    return {
      response_code: HttpStatus.OK,
      response_data: admin1,
    };
  }

  public async findAll() {
    var admins = await this.adminModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: admins,
    };
  }

  public async findOne(id: string) {
    var admins = await this.adminModel.findById(id);
    return {
      response_code: HttpStatus.OK,
      response_data: admins,
    };
  }

  public async update(id: string, admindata: Admin) {
    var admin2 = await this.adminModel.findByIdAndUpdate(id, admindata);
    return {
      response_code: HttpStatus.OK,
      response_data: admin2,
    };
  }

  public async remove(id: string) {
    var admin3 = await this.adminModel.findByIdAndDelete(id);
    admin3.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: admin3,
    };
  }
  public async validateUserCredentials(credentials: CredentialsDto) {
    credentials.email = credentials.email.toLowerCase();
    const admin = await this.adminModel.findOne({
      email: credentials.email,
    });
    if (!admin) {
      return {
        response_code: HttpStatus.UNAUTHORIZED,
        response_data: `Admin with email ${credentials.email} is not registered`,
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

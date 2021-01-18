import { Injectable } from '@nestjs/common';
var bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private async gerneratesalt(): Promise<string> {
    const salt = await bcrypt.genSalt();
    return salt;
  }
  public async hashPassword(password: string) {
    const salt = await this.gerneratesalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return { salt, hashedPassword };
  }
  public async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const passwordMatch = await bcrypt.comapre(password, hashedPassword);
    return passwordMatch;
  }
  public async generateAccessToken(
    _id: string,
    type?: string,
  ): Promise<string> {
    const payload = { _id };
    let accessToken;
    if (type) {
      accessToken = await this.jwtService.sign(payload, { expiresIn: '5m' });
    } else {
      accessToken = await this.jwtService.sign(payload, { expiresIn: '365d' });
    }
    return accessToken;
  }
}

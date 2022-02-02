import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async getUser(username: string, pass: string): Promise<User> {
    return this.UserModel.findOne({ Email: username, Password: pass }).exec();
  }

  async getUserByName(username: string): Promise<User> {
    return this.UserModel.findOne({ Email: username }).exec();
  }
}

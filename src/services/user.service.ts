import { User, UserDocument } from './../schemas/users.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }
    async getAll(): Promise<User[]> {
        try {
            const users = await this.UserModel.find().exec(); //hàm find(): là lấy hết tất cả dữ liệu về
            return users
        } catch (error) {
            return null
        }
    }

    async getById(id: string): Promise<User> {
        try {
            let user = await this.UserModel.findById(id).exec();
            console.log(user);
            return user;

        } catch (error) {
            return null
        }
    }

    async create(user: User): Promise<User> {
        try {
            const newUser = new this.UserModel(user);
            return await newUser.save();
        } catch (error) {
            return null
        }
    }

    async delete(id: String): Promise<User> {
        try {
            let users = await this.UserModel.findByIdAndDelete(id).exec();
            return users;
        } catch (error) {
            return null
        }
    }



    async updateUser(_id: string, user: User) {
        let userAfterUpdated = await this.UserModel.findByIdAndUpdate(_id, user);
        console.log(userAfterUpdated);
        return userAfterUpdated;
    }
}

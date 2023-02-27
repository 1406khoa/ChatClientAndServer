import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { User, UserSchema } from 'src/schemas/users.schema';
import { UserController } from 'src/controllers/v1/user/user.controller';
import { UserService } from 'src/services/user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {}
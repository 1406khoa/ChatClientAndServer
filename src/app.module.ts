import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { ChatGateway } from './gateways/chat/chat.gateway';
import { ChatModule } from './gateways/chat/chat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://khoand11530:112345678khoa@cluster0.bxikkxw.mongodb.net/shop'),
    UserModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

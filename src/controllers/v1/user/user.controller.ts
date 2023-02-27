import { UserService } from './../../../services/user.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from 'src/schemas/users.schema';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {
    }
    @Get('all')
    getAll() {
        return this.UserService.getAll();
    }

    @Get()
    getById(@Query('id') id: string) {
        return this.UserService.getById(id);
    }

    @Post('create')
    GetCreate(@Body() user: User) {
        return this.UserService.create(user);
    }

    @Delete()
    deleteId(@Query('id') id: string) {
        return this.UserService.delete(id);
    }

    @Put('update')
    updateUser(@Body() user: User,@Body('_id') _id: string) {
        console.log(user)
        return this.UserService.updateUser(_id, user);
    }
}

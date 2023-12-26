import { Controller, Post ,Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import {Request } from "express";
@Controller('auth')
export class AuthController {
constructor( private AuthService:AuthService){}
@Post("login")
LogIn(@Req() req:Request){
    return this.AuthService.Login(req);


}


}

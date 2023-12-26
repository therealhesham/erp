import { Injectable, Req } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient();
@Injectable()
export class AuthService {
constructor (private Req:Request, public JwtService: JwtService){}

async Login(req:any){
const email = req.body.email;
const password = req.body.password;

const finder = await prisma.users.findUnique({where:{email}})

if(!finder.password) return "user not found"; 

try {
    const comparer = bcrypt.compare(password,finder.password)
   
 
 return {access_token:await this.JwtService.signAsync({email:finder.email})};
 } catch (error) {
     return "error";
 }
 

}


}

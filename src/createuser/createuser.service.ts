import { Injectable, UseGuards } from '@nestjs/common';
import { Checker } from './checkdata.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';

const prisma =new PrismaClient();

@Injectable()
export class CreateuserService {

constructor(private JwtService : JwtService){


}
async createuser(body:Checker){
if(body.password != body.repeatpassword) return "password not matching" ;
const salt= bcrypt.genSaltSync(10);
const hashedpassword : any =   await bcrypt.hash(body.password ,10)
try {
   const donedata = await prisma.users.create({data:{email:body.email,password:hashedpassword}})

return {access_token:await this.JwtService.signAsync(donedata)};
} catch (error) {
    return error.meta.target;
}
 

}

}

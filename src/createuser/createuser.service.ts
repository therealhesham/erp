import { Injectable } from '@nestjs/common';
import { Checker } from './checkdata.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from "bcrypt";
const prisma =new PrismaClient();
@Injectable()
export class CreateuserService {

async createuser(body:Checker){
if(body.password != body.repeatpassword) return "password not matching" ;
const salt= bcrypt.genSaltSync(10);
const hashedpassword : any =   await bcrypt.hash(body.password ,10)
try {
   const donedata = await prisma.users.create({data:{email:body.email,password:hashedpassword}})

return donedata;
} catch (error) {
    return error.meta.target;
}
 

}

}

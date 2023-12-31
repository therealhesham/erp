import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DataChecker } from './datachecker.dto';

const prisma = new PrismaClient();
@Injectable()
export class EmployersService {

    constructor(){}
async AddEmployerToList(body:DataChecker){
await prisma.employees.create({data:{fullName:body.fullName,netsalary:body.netsalary,
department:body.department,cvLink:body.cvLink,nationalid:body.nationalid,hiringDate:body.hiringdate,
skills:body.skills}})


}



}
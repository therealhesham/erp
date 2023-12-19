import { Body, Controller, Get, Req } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

const Prisma =new PrismaClient();

@Controller('accounting')
export class AccountingController {
constructor(private accservice:AccountingService){}

@Get("records")
Records(@Body() dto:any ){

    return this.accservice.findRecords();
}

}


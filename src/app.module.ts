import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountingController } from './accounting/accounting.controller';
import { AccountingService } from './accounting/accounting.service';
import { AccountingModule } from './accounting/accounting.module';
import { PrismaModule } from './prisma/prisma.module';
import { CreateuserModule } from './createuser/createuser.module';

@Module({
  imports: [AccountingModule, PrismaModule, CreateuserModule],
  controllers: [AppController, AccountingController],
  providers: [AppService, AccountingService],
})
export class AppModule {}

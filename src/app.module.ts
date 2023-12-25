import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountingController } from './accounting/accounting.controller';
import { AccountingService } from './accounting/accounting.service';
import { AccountingModule } from './accounting/accounting.module';
import { PrismaModule } from './prisma/prisma.module';
import { CreateuserModule } from './createuser/createuser.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './nest/auth/auth.service';

@Module({
  imports: [AccountingModule, PrismaModule, CreateuserModule, AuthModule],
  controllers: [AppController, AccountingController],
  providers: [AppService, AccountingService, AuthService],
})
export class AppModule {}

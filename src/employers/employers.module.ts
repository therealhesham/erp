import { Module } from '@nestjs/common';
import { EmployersService } from './employers.service';
import { EmployersController } from './employers.controller';

@Module({
  providers: [EmployersService],
  controllers: [EmployersController]
})
export class EmployersModule {}

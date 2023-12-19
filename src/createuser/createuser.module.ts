import { Module } from '@nestjs/common';
import { CreateuserService } from './createuser.service';
import { CreateuserController } from './createuser.controller';

@Module({
  providers: [CreateuserService],
  controllers: [CreateuserController]
})
export class CreateuserModule {}

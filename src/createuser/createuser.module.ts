import { Module } from '@nestjs/common';
import { CreateuserService } from './createuser.service';
import { CreateuserController } from './createuser.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({imports:[JwtModule.register({global:true,secret:"gogo"})],
  providers: [CreateuserService],
  exports:[CreateuserService],
  controllers: [CreateuserController]
})
export class CreateuserModule {}

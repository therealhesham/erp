import { Body, Controller, Post } from '@nestjs/common';
import { Checker } from './checkdata.dto';
import { CreateuserService } from './createuser.service';

@Controller('createuser')
export class CreateuserController {
constructor(private CreateuserService:CreateuserService){}
@Post("newuser")
createuser(@Body() body:Checker){

return this.CreateuserService.createuser(body)


}


}

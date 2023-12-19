import { Body, Controller, Post } from '@nestjs/common';
import { Checker } from './checkdata.dto';
@Controller('createuser')
export class CreateuserController {

@Post("newuser")
createuser(@Body() body:Checker){


}


}

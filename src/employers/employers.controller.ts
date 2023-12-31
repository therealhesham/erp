import { Body, Controller } from '@nestjs/common';
import { DataChecker } from './datachecker.dto';
import { EmployersService } from './employers.service';


@Controller('employers')
export class EmployersController {
constructor(private EmployersService:EmployersService){}
AddEmployertoDb(@Body() body:DataChecker){


return this.EmployersService.AddEmployerToList(body);



}



}

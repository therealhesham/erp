import { IsArray, IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class DataChecker {


@IsString()
fullName : string

@IsString()
department : string
@IsNumber()
netsalary : number
@IsDate()
hiringdate:Date

@IsNumber()
deduction  : number

@IsNumber()
nationalid : number


@IsNumber()
overtime : number

@IsNumber()
grossSalary : number

@IsNumber()
salary : number

@IsString()
cvLink : string
@IsArray()
skills: string[]

}
import { IsEmail, IsNotEmpty, isString } from "class-validator";

export class Checker{

@IsEmail()
@IsNotEmpty()
email : string;

password :string


repeatpassword: string

}
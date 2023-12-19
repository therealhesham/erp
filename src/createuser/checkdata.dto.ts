import { isEmail, isNotEmpty, isString } from "class-validator";

export class Checker{
@isEmail();
@isNotEmpty();
email : string;
@isString()
password :String


}
import { IsEmail, IsEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsEmpty()
    @IsEmail()
    email: string;

    @IsEmpty()
    @IsString()
    password: string;
}
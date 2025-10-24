import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail({}, { message: "Wrong email format" })
  email: string;

  @IsNotEmpty({ message: "Password must not be empty" })
  @MinLength(8, { message: "Password cant be less then 8 char" })
  password: string;
}

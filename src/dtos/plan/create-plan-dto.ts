import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePlanDto{

    @IsString()
    @Length(2, 120)
    name: string = "";

    @IsInt()
    @IsPositive()
    price: number = 0;
}
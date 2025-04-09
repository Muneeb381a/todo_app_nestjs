import { IsString, IsNotEmpty, IsOptional } from "class-validator";


export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    title: string;


    @IsString()
    @IsNotEmpty()
    description: string;


    @IsOptional()
    completed?: boolean;
}
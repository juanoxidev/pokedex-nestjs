import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    
    @IsInt()
    @IsPositive(1)
    @Min(1)
    nro:number;
    @IsString()
    @MinLength(1)
    name: string;
}

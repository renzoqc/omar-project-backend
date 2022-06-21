import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class PokemonDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    price: number

    @IsString()
    warehouse: string

    @IsString()
    author: string
}

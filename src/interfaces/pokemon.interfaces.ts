import { Pokemon } from "src/entity/Pokemon"

export interface IPostPokemon {
    name: string,
     price: number,
     warehouse: string,
     author: string
}

export interface IResponsePokemon {
    message: string,
    content: Pokemon[],
    extra: string
}

export interface IResponsePokemonNull {
    message: string,
    content: null,
    extra: string
}

export interface IGetErrorMessage {
    msg:string
}

export interface IResponseController{
    message:string,
    content:Pokemon[]
}

export interface IServiceDelete{
    raw:[],
    affected: number
}

export interface GetPokemonsInterface {
    message: string,
    content: Pokemon[],
    extra: string
}
  
export interface ObjectPokemonInterface {
    message: string,
    content: Pokemon,
    extra: string
}
  
export interface DeletePokemonInterface{
    message: string,
    content: null,
    extra: string
}
  
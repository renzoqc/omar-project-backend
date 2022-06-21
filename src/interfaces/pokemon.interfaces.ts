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

export interface IServiceUpdate {
    id: string,
    name: string,
    price: number,
    warehouse: string,
    author: string,
    createdAt: Date,
    updatedAt: Date,
    deleteAt: Date
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

export interface IGetErrorMessage2 {
    message:string
}

// crear varias interfaces

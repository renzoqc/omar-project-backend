import {Pokemon} from "../entity/Pokemon";
import {request, Request, response, Response} from "express";
import { IPostPokemon } from "../interfaces/pokemon.interfaces"
import { AppDataSource } from '../db'
import { getRepository } from "typeorm";

export const createPokemonService = async (data:IPostPokemon[]) => {
    try {
        const PokemonRepository = AppDataSource.getRepository(Pokemon)
        const createdPokemonS = await PokemonRepository.save(data);
        return {createdPokemonS}
    } catch (error) {
        throw error
    }
};
export const deletePokemonService = async (id: string) => {
    
    try {
        const PokemonRepository = AppDataSource.getRepository(Pokemon)
        const eliminedPokemonS = await PokemonRepository.delete({ id: parseInt(id)})
        return {message:'Pokemon eliminado con id: '+id}
    } catch (error) {
        throw error
    }
};
export const getPokemonService = async (id: string ) => {

    try {
        const PokemonRepository = AppDataSource.getRepository(Pokemon)
        const getPokemonS = await PokemonRepository.findOneBy({id: parseInt(id)})
        return {getPokemonS}
    } catch (error) {
        throw error;
    }
}
export const getPokemonsService = async () =>{
    try {
        const PokemonRepository = AppDataSource.getRepository(Pokemon)
        const getPokemonsS = await PokemonRepository.find()
        return {getPokemonsS};
    } catch (error) {
        throw error
    }
}
export const updatePokemonService = async (id:string, data:IPostPokemon) =>{
    try {
        const PokemonRepository = AppDataSource.getRepository(Pokemon)
        const pokemon = await PokemonRepository.findOneBy({ id: parseInt(id)});

        if(pokemon){
            PokemonRepository.merge(pokemon, data);
            const results = await  PokemonRepository.save(pokemon);
            return {results}
        }
        return {msg:"Pokemon no encontrado"}
    } catch (error) {
        throw error;
    }
}
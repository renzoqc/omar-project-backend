import {Pokemon} from "../entity/Pokemon";
import {request, Request, response, Response} from "express";
import { IpostPokemon } from "../interfaces/pokemon.interfaces"
import { AppDataSource } from '../db'
import { getRepository } from "typeorm";


export const createPokemonService = async (data:IpostPokemon[]) => {
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
        const eliminedPokemonS = await Pokemon.delete({ id: parseInt(id)})
        return {msg:'Pokemon eliminado con id: '+id}
    } catch (error) {
        throw error
    }

};

export const getPokemonService = async (id: string ) => {

    try {
        const getPokemonS = await Pokemon.findOneBy({id: parseInt(id)})
        return {getPokemonS}
    } catch (error) {
        throw error;
    }

}

export const getPokemonsService = async () =>{
    try {
        const getPokemonsS = await Pokemon.find()
        return {getPokemonsS};
    } catch (error) {
        throw error
    }
}

export const updatePokemonService = async (id:string, data:IpostPokemon) =>{
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
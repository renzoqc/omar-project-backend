import {Pokemon} from "../entity/Pokemon";
import {request, Request, response, Response} from "express";
import { IPostPokemon } from "../interfaces/pokemon.interfaces"
import { AppDataSource } from '../db'
import { getRepository } from "typeorm";

export class PokemonService {
    constructor() {
    }
    async getPokemons() {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const getPokemonsS = await PokemonRepository.find()
            return getPokemonsS;
        } catch (error) {
            throw error
        }
    };
    
    async createPokemon (data:IPostPokemon[]) {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const createdPokemonS = await PokemonRepository.save(data);
            return createdPokemonS
        } catch (error) {
            throw error
        }
    };

    async deletePokemon (id: string)  {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const eliminedPokemonS = await PokemonRepository.delete({ id: parseInt(id)})
           
            if (eliminedPokemonS) {
                return id
            }
            return "Pokemon no encontrado"
        } catch (error) {
            throw error
        }
     };

    async getPokemon (id: string ) {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const getPokemonS = await PokemonRepository.findOneBy({id: parseInt(id)})
            
            if(getPokemonS){
                return getPokemonS
            }
            return {msg:"Pokemon no encontrado"}
        } catch (error) {
            throw error;
        }
    };

    async updatePokemon (id:string, data:IPostPokemon) {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const pokemon = await PokemonRepository.findOneBy({ id: parseInt(id)});
            
            if(pokemon){
                PokemonRepository.merge(pokemon, data);
                const results = await PokemonRepository.save(pokemon);
                return results
            }
            return {msg:"Pokemon no encontrado"}
        } catch (error) {
            throw error;
        }
    };
}

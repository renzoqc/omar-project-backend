import {Pokemon} from "../entity/Pokemon";
import {request, Request, response, Response} from "express";
import { IPostPokemon } from "../interfaces/pokemon.interfaces"
import { AppDataSource } from '../db'
import { getRepository } from "typeorm";

export class PokemonService {
    constructor() {
    }

    async getPokemons():Promise<any> {
        try {
            const PokemonRepository:any = AppDataSource.getRepository(Pokemon)
            const getPokemonsS:any = await PokemonRepository.find()
            return getPokemonsS;
        } catch (error) {
            throw error
        }
    };

    async createPokemon (data:IPostPokemon[]):Promise<any> {
        try {
            const PokemonRepository:any = AppDataSource.getRepository(Pokemon)
            const createdPokemonS:any = await PokemonRepository.save(data);
            return createdPokemonS
        } catch (error) {
            throw error
        }
    };

    async deletePokemon (id: string):Promise<any>  {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const eliminedPokemonS = await PokemonRepository.delete({ id: parseInt(id)})

            if(eliminedPokemonS.affected === 0){
                return false
            }
            return true
        } catch (error) {
            throw error
        }
     };

    async getPokemon (id: string ):Promise<any> {
        try {
            const PokemonRepository:any = AppDataSource.getRepository(Pokemon)
            const getPokemonS:any = await PokemonRepository.findOneBy({id: parseInt(id)})

            if(getPokemonS){
                return getPokemonS
            }
            return {msg:"Pokemon no encontrado"}
        } catch (error) {
            throw error;
        }
    };

    async updatePokemon (id:string, data:IPostPokemon):Promise<any> {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const pokemon = await PokemonRepository.findOneBy({id: parseInt(id)});
            // console.log(pokemon)
            if (pokemon) {
                PokemonRepository.merge(pokemon, data);
                const results = await PokemonRepository.save(pokemon);
                return results
            }
            return null
        }
         catch (error) {
            throw error;
        }
    };
}

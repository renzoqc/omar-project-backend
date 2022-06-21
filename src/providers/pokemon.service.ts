import {Pokemon} from "../entity/Pokemon";
import {IGetErrorMessage, IPostPokemon} from "../interfaces/pokemon.interfaces"
import {AppDataSource} from '../db'
import {PokemonDto} from '../dto/Pokemon.dto'

export class PokemonService {
    constructor() {
    }

    async getPokemons():Promise<Pokemon[]> {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            return await PokemonRepository.find();
        } catch (error) {
            throw error
        }
    };

    async createPokemon (data: PokemonDto[]):Promise<Pokemon[]> {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            return await PokemonRepository.save(data)
        } catch (error) {
            throw error
        }
    };

    async deletePokemon (id: string):Promise<true | false>  {
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

    async getPokemon (id: string ):Promise<Pokemon | IGetErrorMessage> {
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const getPokemonS:Pokemon | null = await PokemonRepository.findOneBy({id: parseInt(id)})
            
            if(getPokemonS){
                return getPokemonS
            }
            return {msg:"Pokemon no encontrado"}
        } catch (error) {
            throw error;
        }
    };

    async updatePokemon (id:string, data:PokemonDto):Promise<Pokemon | null>{
        try {
            const PokemonRepository = AppDataSource.getRepository(Pokemon)
            const updatePokemonS:Pokemon | null = await PokemonRepository.findOneBy({id: parseInt(id)});

            if (updatePokemonS) {
                PokemonRepository.merge(updatePokemonS, data);
                const results = await PokemonRepository.save(updatePokemonS);
                return results
            }
            return null
        }
         catch (error) {
            throw error;
        }
    };
}

import { Request, Response } from "express";
import { ApiResponse } from '../response/pokemon.responses'
import { PokemonService } from '../providers/pokemon.service'
import {Pokemon} from "../entity/Pokemon";

const Service = new PokemonService()

export class PokemonController {
  constructor() {
  }

  async getPokemons (req: Request, res: Response):Promise<any> {
    try{
      const getPokemonsC = await Service.getPokemons();
      let response:any;

      if(getPokemonsC.length === 0) {
          response = ApiResponse("No se encontraron pokemones", getPokemonsC, "")
          return res.status(403).json(response)
      }
      response = ApiResponse("Se obtuvo los pokemones", getPokemonsC, "");
      return res.json(response);
    }catch(error){
      return res.status(500).json({ message: error.message });
    }
  };

  async createPokemon (req: Request, res: Response):Promise<any> {
    try {
      const createdPokemonC:any = await Service.createPokemon(req.body);
      const response:any = ApiResponse("Se creo pokemon", createdPokemonC, "")
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  async deletePokemon (req: Request, res: Response):Promise<any> {
      try {
          const idDeletedPokemonC = await Service.deletePokemon(req.params.id);
          let response;
          if(!idDeletedPokemonC) {
              response = ApiResponse('No se encontró pokemon', {} , "")
              return res.status(404).json(response)
          }
          response = ApiResponse(`Se elimino pokemon con id: ${req.params.id}`, {} , "");
          return res.json(response);
      } catch (error) {
          return res.status(500).json({ message: error.message });
      }
  };

  async getPokemon (req: Request, res: Response):Promise<any> {
    try {
     const getPokemonC = await Service.getPokemon(req.params.id)
     const response = ApiResponse("Se encontro un pokemon", getPokemonC, "")
     return res.json(response)
   } catch (error) {
     return res.status(500).json({ message: error.message });
   }
 };

  async updatePokemon (req: Request, res: Response):Promise<any> {
   try {
       const updatePokemonC = await Service.updatePokemon(req.params.id, req.body);
        let response;
       if(!updatePokemonC) {
           response = ApiResponse('No se encontró pokemon', {} , "")
           return res.status(404).json(response)
       }

     response = ApiResponse("Se actualizo el pokemon ", updatePokemonC, "")
     return res.json(response)
   } catch (error) {
     return res.status(500).json({ message: error.message });
   }
 };

}


import {Request, Response } from "express";
import {ApiResponse } from '../response/pokemon.responses'
import {PokemonService } from '../providers/pokemon.service'
import {Pokemon} from "../entity/Pokemon";
import {IGetErrorMessage, IResponseController, IResponsePokemon, IResponsePokemonNull, GetPokemonsInterface, ObjectPokemonInterface, DeletePokemonInterface } from "src/interfaces/pokemon.interfaces";
import {PokemonDto } from "src/dto/Pokemon.dto";
import type * as E from 'express';

const Service = new PokemonService()

export class PokemonController {
  constructor() {
  }

  async getPokemons (req: Request, res: Response): Promise<E.Response<GetPokemonsInterface>>{
    try{
      const getPokemonsC:Pokemon[] = await Service.getPokemons();
      let response:IResponseController | null;

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

  async createPokemon (req: Request, res: Response):Promise<E.Response<ObjectPokemonInterface>> {
    try {
      const createdPokemonC:Pokemon[] = await Service.createPokemon(req.body);
      const response:IResponseController = ApiResponse("Se creo pokemon", createdPokemonC, "")
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  async deletePokemon (req: Request, res: Response):Promise<E.Response<DeletePokemonInterface>> {
    try {
      const idDeletedPokemonC:true | false = await Service.deletePokemon(req.params.id);
      let response:IResponsePokemon; 

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

  async getPokemon (req: Request, res: Response):Promise<E.Response<ObjectPokemonInterface>> {
    try {
      const getPokemonC: Pokemon | IGetErrorMessage = await Service.getPokemon(req.params.id)
      const response: IResponsePokemon = ApiResponse("Se encontro un pokemon", getPokemonC, "")
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  async updatePokemon (req: Request, res: Response):Promise<E.Response<ObjectPokemonInterface>> {
    try {
      const updatePokemonC: Pokemon | null = await Service.updatePokemon(req.params.id, req.body);
      let response: IResponsePokemon | IResponsePokemonNull;

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


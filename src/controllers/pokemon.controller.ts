import { Request, Response } from "express";
import { createPokemonService, deletePokemonService, getPokemonService, getPokemonsService, updatePokemonService } from "../providers/pokemon.service"
import { ApiResponse } from '../response/pokemon.responses'

export const getPokemonsController = async (req: Request, res: Response):Promise<any> =>{
  try{
    const getPokemonsC = await getPokemonsService();
    const response = ApiResponse("Se obtuvo los pokemones", getPokemonsC, "")
    return res.json(response)
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export const getPokemonController = async (req: Request, res: Response):Promise<any> => {
  try {
    const getPokemonC = await getPokemonService(req.params.id)
    const response = ApiResponse("Se encontro un pokemon", getPokemonC, "")
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const createPokemonController = async (req: Request, res: Response):Promise<any> => {
  try {
    const createdPokemonC = await createPokemonService(req.body);
    const response = ApiResponse("Se creo pokemon", createdPokemonC, "")
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePokemonController = async (req: Request, res: Response):Promise<any> =>{
  try {
    const idDeletedPokemonC = await deletePokemonService(req.params.id);
    const response = ApiResponse(`Se elimino pokemon con id: ${idDeletedPokemonC}`, {} , "")
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const updatePokemonController = async (req: Request, res: Response):Promise<any> =>{
  try {
    const updatePokemonC = await updatePokemonService(req.params.id, req.body)
    const response = ApiResponse("Se actualizo el pokemon", updatePokemonC, "")
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

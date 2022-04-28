import { Request, Response } from "express";
import { create } from "ts-node";
import { Pokemon } from "../entity/Pokemon";
import { createPokemonService, deletePokemonService, getPokemonService, getPokemonsService, updatePokemonService } from "../providers/pokemon.service"


export const createPokemonController = async (req: Request, res: Response):Promise<any> => {
  try {
    const createdPokemonC = await createPokemonService(req.body);
    return res.json({message:'Se creo pokemon', createdPokemonC})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePokemonController = async (req: Request, res: Response):Promise<any> =>{
  try {
    const deletedPokemonC = await deletePokemonService(req.params.id);
    return res.json({message:'Se  elimino pokemon', deletedPokemonC})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getPokemonController = async (req: Request, res: Response):Promise<any> => {
  try {
    const getPokemonC = await getPokemonService(req.params.id)
    return res.json({message:'Se encontro un pokemon',getPokemonC})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getPokemonsController = async (req: Request, res: Response):Promise<any> =>{
  try{
    const getPokemonsC = await getPokemonsService();
    return res.json({message:'Se obutvo los pokemones', getPokemonsC});
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export const updatePokemonController = async (req: Request, res: Response):Promise<any> =>{
  try {
    const updatePokemonC = await updatePokemonService(req.params.id, req.body)
    return res.json({message:'Se actualizo el pokemon',updatePokemonC})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


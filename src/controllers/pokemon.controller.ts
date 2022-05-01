import { Request, Response } from "express";
import { createPokemonService, deletePokemonService, getPokemonService, getPokemonsService, updatePokemonService } from "../providers/pokemon.service"


export const createPokemonController = async (req: Request, res: Response):Promise<any> => {
  try {
    const createdPokemonC = await createPokemonService(req.body);
    const response = {
      message: "Se creo pokemon",
      content: [createdPokemonC],
      extra: " "
    }
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePokemonController = async (req: Request, res: Response):Promise<any> =>{
  try {
    const deletedPokemonC = await deletePokemonService(req.params.id);
    const response = {
      message: "Se elimino pokemon",
      content: [deletedPokemonC],
      extra: " "
    }
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getPokemonController = async (req: Request, res: Response):Promise<any> => {
  try {
    const getPokemonC = await getPokemonService(req.params.id)
    const response = {
      message: "Se encontro un pokemon",
      content: [getPokemonC],
      extra: " "
    }
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getPokemonsController = async (req: Request, res: Response):Promise<any> =>{
  try{
    const getPokemonsC = await getPokemonsService();
    const response = {
      message: "Se obtuvo los pokemones",
      content: [getPokemonsC],
      extra: " "
    }
    return res.json(response)
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export const updatePokemonController = async (req: Request, res: Response):Promise<any> =>{
  try {
    const updatePokemonC = await updatePokemonService(req.params.id, req.body)
    const response = {
      message: "Se actualizo el pokemon",
      content: [updatePokemonC],
      extra: " "
    }
    return res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


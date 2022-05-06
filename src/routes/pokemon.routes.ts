import { Router } from "express";
import { PokemonController } from '../controllers/pokemon.controller'

const Controller = new PokemonController()
const router = Router();

router.get("/pokemons", Controller.getPokemons);
router.post("/pokemons", Controller.createPokemon);
router.delete("/pokemons/:id", Controller.deletePokemon);
router.get("/pokemons/:id", Controller.getPokemon);
router.put("/pokemons/:id", Controller.updatePokemon);

export default router;

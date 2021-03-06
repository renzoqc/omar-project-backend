import { Router } from "express";
import {createPokemonController, deletePokemonController, getPokemonController, getPokemonsController, updatePokemonController } from "../controllers/pokemon.controller";

const router = Router();

router.get("/pokemons", getPokemonsController);
router.post("/pokemons", createPokemonController);
router.delete("/pokemons/:id", deletePokemonController);
router.get("/pokemons/:id", getPokemonController);
router.put("/pokemons/:id", updatePokemonController);

export default router;

import { Router } from "express";
import { PokemonController } from '../controllers/pokemon.controller'

const Controller = new PokemonController()
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Pokemon:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: El nombre del pokemon
 *              price:
 *                  type: number
 *                  description: El precio del pokemon
 *              warehouse:
 *                  type: string
 *                  description: El nombre del almacen
 *              author:
 *                  type: string
 *                  description: El autor del pokemon
 *      
 *          required:
 *              - name
 *              - price
 *              - warehouse
 *              - author
 *          example:
 *              name: Pikachu
 *              price: 150
 *              warehouse: Pueblo Paleta
 *              author: Ash Ketchup
 */

router.get("/pokemons", Controller.getPokemons);

/**
 * @swagger
 * /api/pokemons:
 *  get:
 *      summary: return all pokemons
 *      tags: [Pokemon]
 *      responses:
 *          200:
 *              description: all pokemons
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Pokemon'
 */

router.post("/pokemons", Controller.createPokemon);

/**
 * @swagger
 * /api/pokemons:
 *  post:
 *      summary: create a new pokemon
 *      tags: [Pokemon]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Pokemon'
 *      responses:
 *          200:
 *              description: new pokemon created!
 */

router.delete("/pokemons/:id", Controller.deletePokemon);

/**
 * @swagger
 * /api/pokemons/{id}:
 *  delete:
 *      summary: delete a pokemon
 *      tags: [Pokemon]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the pokemon id       
 *      responses:
 *          200:
 *              description: pokemon deleted
 *          404:
 *              description: pokemon not found
 */

router.get("/pokemons/:id", Controller.getPokemon);

/**
 * @swagger
 * /api/pokemons/{id}:
 *  get:
 *      summary: return a pokemon
 *      tags: [Pokemon]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the pokemon id       
 *      responses:
 *          200:
 *              description: a pokemon
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: object
 *                              $ref: '#/components/schemas/Pokemon'
 *          404:
 *              description: pokemon not found
 */

router.put("/pokemons/:id", Controller.updatePokemon);

/**
 * @swagger
 * /api/pokemons/{id}:
 *  put:
 *      summary: update a pokemon
 *      tags: [Pokemon]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: the pokemon id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Pokemon'       
 *      responses:
 *          200:
 *              description: pokemon update
 *          404:
 *              description: pokemon not found
 */

export default router;

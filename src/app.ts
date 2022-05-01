import express from "express";
import pokemonRoutes from "./routes/pokemon.routes";

const app = express();

app.use(express.json());
app.use("/api", pokemonRoutes);

export default app;

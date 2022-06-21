import path from "path";
import express from "express";
import pokemonRoutes from "./routes/pokemon.routes";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node PostgreSQL API",
      version: "1.0.0"
    },
    servers:[
      {
        url:"http://localhost:3000"
      }
    ]
  },
  apis: [`${path.join(__dirname, "./routes/pokemon.routes.ts")}`],
}

const app = express();

app.use(express.json());
app.use("/api", pokemonRoutes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

export default app;

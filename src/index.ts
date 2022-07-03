import app  from "./app";
import { PORT } from "./config";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Connected to Postgres')
    app.listen (PORT); 
    console.log("Running on port: ", PORT)
  }
  catch (error) {
    console.error(error)
        throw new Error("Unable to connect to db")
  }
}
main();

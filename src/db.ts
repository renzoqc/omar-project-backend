import { DataSource } from "typeorm"
import { Pokemon } from "./entity/Pokemon"

export const AppDataSource = new DataSource({
            type: "postgres",
            host:"localhost",
            port: 5432,
            username: 'postgres',
            password: 'locopera123',
            database: 'postgres',
            entities: [Pokemon],
            synchronize: true,
        });

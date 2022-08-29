require('dotenv').config()
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database:"./src/database/database.sqlite",
    entities: [
        "src/database/entity/*.ts"
    ],
    migrations: [
        "src/database/migrations/*.ts"
    ]
})
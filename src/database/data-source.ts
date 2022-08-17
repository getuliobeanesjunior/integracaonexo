require('dotenv').config()
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt( process.env.DATABASE_PORT ),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        "src/database/entity/*.ts"
    ],
    migrations: [
        "src/database/migrations/*.ts"
    ]
})
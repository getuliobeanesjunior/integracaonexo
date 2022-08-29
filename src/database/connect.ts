import { AppDataSource } from "./data-source-sqlite";

AppDataSource.initialize()
.then(() =>console.log("connected with database"))
.catch((error) => console.log(error))
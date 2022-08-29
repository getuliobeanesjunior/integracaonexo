
import "reflect-metadata"
import "../../../database/connect";
import { AppDataSource } from "../../../database/data-source-sqlite";
import ILogs from "../../Interfaces/ILogs";
import Logs from "../../../database/entity/Logs";

export default {
 
    async createLog(ILogs: ILogs): Promise<Logs>{

        const repository = AppDataSource.getRepository(Logs)
        
        ILogs.created_at = new Date();

        const user = repository.create({ ...ILogs })

        await repository.save(user)

        return user;
    }

}
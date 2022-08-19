
import "reflect-metadata"
import "../../../database/connect";
import { AppDataSource } from "../../../database/data-source";
import ILogs from "../../Interfaces/ILogs";
import Logs from "../../../database/entity/Logs";

export default {
 
    async createLog(ILogs: ILogs): Promise<Logs>{

        const repository = AppDataSource.getRepository(Logs)

        const user = repository.create({ ...ILogs })

        await repository.save(user)

        return user;
    }

}

import "reflect-metadata"
import "../../../database/connect";
import QueryString from "qs";
import { AppDataSource } from "../../../database/data-source-sqlite";
import ILogs from "../../Interfaces/ILogs";
import Logs from "../../../database/entity/Logs";
import queryBuilder from "./queryBuilder";

export default { 
    async createLog(ILogs: ILogs): Promise<Logs>{
        const repository = AppDataSource.getRepository(Logs)        
        ILogs.created_at = new Date();
        const log = repository.create({ ...ILogs })
        await repository.save(log)
        return log;
    },

    async deleteLogByType(typeLog: string): Promise<void>{
        const repository = AppDataSource.getRepository(Logs)
        await repository.delete({ integration_type: typeLog })
    },

    async getLogs(filter:QueryString.ParsedQs): Promise<Logs[]>{
        const repository = AppDataSource.getRepository(Logs)
        const logs = repository.find({ where: queryBuilder(filter) })
        return logs;
    }
}
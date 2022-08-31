import { Request, Response, NextFunction } from 'express';
import logApp from '../application/logs';

class LogController{
    async get(req: Request, res: Response, next: NextFunction){
        try{
            const filter = req.query;
            const logs = await logApp.getLogs(filter)
            res.send(logs)
        }catch(e) {
            next(e)
        }
    }
}

export default new LogController();
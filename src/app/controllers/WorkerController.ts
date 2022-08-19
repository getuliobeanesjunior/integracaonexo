import { NextFunction, Request, Response } from "express";
import turnoStart from "../application/workers/turno";

class WorkerController{

    async executeTurno(req: Request, res: Response, next: NextFunction){
        turnoStart.run();
        res.json('OK');
    }

}

export default new WorkerController();
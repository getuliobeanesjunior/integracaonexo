import { NextFunction, Request, Response } from "express";
import turnoStart from "../application/workers/Turno";
import funcionarioStart from "../application/workers/Funcionario";
import setorStart from "../application/workers/Setor";

class WorkerController{

    async executeTurno(req: Request, res: Response, next: NextFunction){
        turnoStart.run();
        res.json('OK');
    }

    async executeFuncionario(req: Request, res: Response, next: NextFunction){
        funcionarioStart.run();
        res.json('OK');
    }

    async executeSetor(req: Request, res: Response, next: NextFunction){
        setorStart.run();
        res.json('OK');
    }

}

export default new WorkerController();
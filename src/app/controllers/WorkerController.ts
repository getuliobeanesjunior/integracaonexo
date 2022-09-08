import { NextFunction, Request, Response } from "express";
import turnoStart from "../application/workers/Turno";
import funcionarioStart from "../application/workers/Funcionario";
import setorStart from "../application/workers/Setor";
import empresaStart from "../application/workers/Empresa";
import cargoStart from "../application/workers/Cargo";

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

    async executeEmpresa(req: Request, res: Response, next: NextFunction){
        empresaStart.run();
        res.json('OK');
    }

    async executeCargo(req: Request, res: Response, next: NextFunction){
        cargoStart.run();
        res.json('OK');
    }

}

export default new WorkerController();
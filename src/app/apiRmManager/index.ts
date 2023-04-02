import ITurno from "../Interfaces/ITurno";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import {parseStringPromise} from "xml2js"
import sanitizeEmployees from "./sanitizeEmployees";
import sanitizeSector from "./sanitizeSector";
import sanitizeCompany from "./sanitizeCompany";
import sanitizeOffice from "./sanitizeOffice";
var soap = require('soap')

dayjs.extend(utc)

export default class ApiRmManager {

    public async getNewShifts() : Promise<Array<ITurno>>{

        return [{
            "Codigo":"00001",
            "HoraInicio":dayjs().utc().format(),
            "HoraFim":"2019-12-30T13:33:55.901Z",
            "HoraInicioAlmoco":"2019-12-30T13:33:55.901Z",
            "HoraFimAlmoco":"2019-12-30T13:33:55.901Z",
            "UtilizarEscalaDeTrabalho":true,
            "Tipo":"F"
         }]

    }

    public getModifiedsShifts(){
    }

    public async getNewEmployees(){
        const codSentenca = "API.NEXO.0010";
        const codColigada = 0;
        const codSistema = "P";
        const parameters = "";
        const context = "CODUSUARIO=aldemir.trevox;CODSISTEMA=P;CODCOLIGADA=0";

        const args = {
            codSentenca,
            codColigada,
            codSistema,
            parameters,
            context
        }

        const client    = await this.createClient();
        const resulSql = await client.RealizarConsultaSQLAsync(args);

        const employees = await parseStringPromise(resulSql[0].RealizarConsultaSQLResult)

        return sanitizeEmployees(employees.NewDataSet.Resultado);
    }

    public async getNewSector(){
        const codSentenca = "API.NEXO.00003";
        const codColigada = 0;
        const codSistema = "P";
        const parameters = "";
        const context = "CODUSUARIO=aldemir.trevox;CODSISTEMA=P;CODCOLIGADA=0";

        const args = {
            codSentenca,
            codColigada,
            codSistema,
            parameters,
            context
        }

        const client    = await this.createClient();
        const resulSql = await client.RealizarConsultaSQLAsync(args);

        const sectors = await parseStringPromise(resulSql[0].RealizarConsultaSQLResult)

        return sanitizeSector(sectors.NewDataSet.Resultado);
    }

    public async getNewCompany(){
        const codSentenca = "API.NEXO.00004";
        const codColigada = 0;
        const codSistema = "P";
        const parameters = "";
        const context = "CODUSUARIO=aldemir.trevox;CODSISTEMA=P;CODCOLIGADA=0";

        const args = {
            codSentenca,
            codColigada,
            codSistema,
            parameters,
            context
        }

        const client    = await this.createClient();
        const resulSql = await client.RealizarConsultaSQLAsync(args);

        const sectors = await parseStringPromise(resulSql[0].RealizarConsultaSQLResult)

        return sanitizeCompany(sectors.NewDataSet.Resultado);
    }

    public async getNewOffice(){
        const codSentenca = "API.NEXO.00005";
        const codColigada = 0;
        const codSistema = "P";
        const parameters = "";
        const context = "CODUSUARIO=aldemir.trevox;CODSISTEMA=P;CODCOLIGADA=0";

        const args = {
            codSentenca,
            codColigada,
            codSistema,
            parameters,
            context
        }

        const client    = await this.createClient();
        const resulSql = await client.RealizarConsultaSQLAsync(args);

        const sectors = await parseStringPromise(resulSql[0].RealizarConsultaSQLResult)

        return sanitizeOffice(sectors.NewDataSet.Resultado);
    }

    async createClient(){
        const client = await soap.createClientAsync(process.env.API_RM_URL);
        client.setSecurity(new soap.BasicAuthSecurity(process.env.API_RM_USER, process.env.API_RM_PASSWORD));
        return client;
    }

}
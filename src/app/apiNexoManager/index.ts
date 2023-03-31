require('dotenv').config()
import axios from 'axios';
import { Logger } from 'winston';
import { ApiTypes } from '../../utils/enumApiTypes';
import { sleep } from '../../utils/sleep';
import logs from '../application/logs';
import ICompany from '../Interfaces/ICompany';
import IEmployess from '../Interfaces/IEmployess';
import ILogs from '../Interfaces/ILogs';
import IOffice from '../Interfaces/IOffice';
import ISector from '../Interfaces/ISector';
import ITurno from '../Interfaces/ITurno';

export class ApiNexoManager {

    static async getToken({
        maxRetries = 3,
        retries = 0,
        sleepTime = 800
    }): Promise<String>{

        const url:string = process.env.API_URL;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const body:String = this.formUrlEncoded({
            username: process.env.API_USER,
            password: process.env.API_PASSWORD,
            client_id: process.env.API_CLIENT_ID,
            grant_type: process.env.API_GRANT_TYPE
        })

        try{

            const {data} = await axios.post(`${url}token`, body, {headers});

            return data.access_token;

        }catch(err){
            retries++
            await sleep(sleepTime)
        
            if(retries <= maxRetries){
                return this.getToken({ maxRetries, retries, sleepTime })
            }

            console.log(err)

            throw new Error(err)
        }

    }

    static formUrlEncoded (fields:any): String {
        return Object.keys(fields).reduce(
            (acc, field) => acc + `&${field}=${encodeURIComponent(fields[field])}`,
            '',
        );
    }

    public async sendNewsShifts( shifts: Array<ITurno> ){

        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        for(const shift of shifts){
            try{
                const {data} = await axios.post(`${url}NexoAPIRest/api/Turno`, {...shift}, {headers});   
            }catch(err){      
                console.log(err.response.data)     
                
                const log:ILogs = {
                    integration_type: ApiTypes.API_TURNO,
                    integration_success: false,
                    sent_json: JSON.stringify({...shift}),
                    message: err.response.data.error.message || "Erro não retornado na API"
                }

                await logs.createLog(log)

                throw new Error(err)
            }
        }
    }

    public async sendNewsEmployees( employees: Array<IEmployess>, logger: Logger){
        await logs.deleteLogByType(ApiTypes.API_FUNCIONARIO);
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let funcionarioAtual = 1;
        let success = 0;
        let error = 0;
        for(const employee of employees){
            logger.info(`Integrando funcionário ${funcionarioAtual} de ${employees.length}`)
            funcionarioAtual++;
            try{
                const {data} = await axios.post(`${url}api/Funcionario`, {...employee}, {headers}); 
                const log:ILogs = {
                    integration_type: ApiTypes.API_FUNCIONARIO,
                    integration_success: true,
                    sent_json: JSON.stringify({...data}),
                    message: "INTEGRAÇÃO REALIZADA COM SUCESSO"
                }
                await logs.createLog(log)
                success++;
            }catch(err){
                let message
                if(err.response && err.response.data){
                    console.log(`Error ao entregar funcionário => ${JSON.stringify(err.response.data)}`)
                    message = JSON.stringify(err.response.data)
                }else{
                    message = "Erro não retornado na API"
                }
                const log:ILogs = {
                    integration_type: ApiTypes.API_FUNCIONARIO,
                    integration_success: false,
                    sent_json: JSON.stringify({...employee}),
                    message
                }
    
                await logs.createLog(log)
                error++;
                
            }
        }
        logger.info(`Integrado ${success} funcionários com sucesso e ${error} falhas na integração.`)
    }

    public async sendUpdateEmployees( employees: Array<IEmployess>, logger: Logger){
        await logs.deleteLogByType(ApiTypes.API_FUNCIONARIO);
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let funcionarioAtual = 1;
        let success = 0;
        let error = 0;
        for(const employee of employees){
            logger.info(`Integrando funcionário ${funcionarioAtual} de ${employees.length}`)
            funcionarioAtual++;
            try{
                const {data} = await axios.patch(`${url}api/Funcionario('${employee.CodigoEmpresa}','${employee.Codigo}')`, {...employee}, {headers});
                const log:ILogs = {
                    integration_type: ApiTypes.API_FUNCIONARIO,
                    integration_success: true,
                    sent_json: JSON.stringify({...data}),
                    message: "UPDATE REALIZADA COM SUCESSO"
                }
                await logs.createLog(log)
                success++;
            }catch(err){
                let message
                if(err.response && err.response.data){
                    console.log(`Error no update funcionário => ${JSON.stringify(err.response.data)}`)
                    message = JSON.stringify(err.response.data)
                }else{
                    message = "Erro não retornado na API"
                }
                const log:ILogs = {
                    integration_type: ApiTypes.API_FUNCIONARIO,
                    integration_success: false,
                    sent_json: JSON.stringify({...employee}),
                    message
                }
    
                await logs.createLog(log)
                error++;
            }
        }
        logger.info(`Update ${success} funcionários com sucesso e ${error} falhas na integração.`)
    }

    public async sendNewsSectors( sectors: Array<ISector>, logger: Logger ){
        await logs.deleteLogByType(ApiTypes.API_SETOR);
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let setorAtual = 1;
        let success = 0;
        let error = 0;
        for(const sector of sectors){
            logger.info(`Integrando setor ${setorAtual} de ${sectors.length}`)
            try{
                const {data} = await axios.post(`${url}api/Setor`, {...sector}, {headers}); 
                console.log(data)
                const log:ILogs = {
                    integration_type: ApiTypes.API_SETOR,
                    integration_success: true,
                    sent_json: JSON.stringify({...data}),
                    message: "INTEGRAÇÃO REALIZADA COM SUCESSO"
                }
                await logs.createLog(log)
                success++;
            }catch(err){
                let message
                if(err.response && err.response.data){
                    message = JSON.stringify(err.response.data)
                }else{
                    message = "Erro não retornado na API"
                }
                const log:ILogs = {
                    integration_type: ApiTypes.API_SETOR,
                    integration_success: false,
                    sent_json: JSON.stringify({...sector}),
                    message 
                }    
                await logs.createLog(log)
                error++;
            }
        }
        logger.info(`Integrado ${success} setores com sucesso e ${error} falhas na integração.`)
    }

    public async sendNewsCompanies( companies: Array<ICompany>, logger: Logger){
        await logs.deleteLogByType(ApiTypes.API_EMPRESA);
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let empresaAtual = 1;
        let success = 0;
        let error = 0;
        for(const company of companies){
            logger.info(`Integrando empresa ${empresaAtual} de ${companies.length}`)
            empresaAtual++;
            try{
                const {data} = await axios.post(`${url}api/Empresa`, {...company}, {headers}); 
                const log:ILogs = {
                    integration_type: ApiTypes.API_EMPRESA,
                    integration_success: true,
                    sent_json: JSON.stringify({...data}),
                    message: "INTEGRAÇÃO REALIZADA COM SUCESSO"
                }
                await logs.createLog(log)
                success++;
            }catch(err){
                let message
                if(err.response && err.response.data){
                    message = JSON.stringify(err.response.data)
                }else{
                    message = "Erro não retornado na API"
                }
                const log:ILogs = {
                    integration_type: ApiTypes.API_EMPRESA,
                    integration_success: false,
                    sent_json: JSON.stringify({...company}),
                    message 
                }    
                await logs.createLog(log)
                error++
            }
        }
        logger.info(`Integrado ${success} empresas com sucesso e ${error} falhas na integração.`)
    }

    public async sendNewsOffices( offices: Array<IOffice>, logger: Logger){
        await logs.deleteLogByType(ApiTypes.API_CARGO);
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let cargoAtual = 1;
        let success = 0;
        let error = 0;
        for(const office of offices){
            logger.info(`Integrando cargo ${cargoAtual} de ${offices.length}`)
            cargoAtual++;
            try{
                const {data} = await axios.post(`${url}api/Cargo`, {...office}, {headers}); 
                const log:ILogs = {
                    integration_type: ApiTypes.API_CARGO,
                    integration_success: true,
                    sent_json: JSON.stringify({...data}),
                    message: "INTEGRAÇÃO REALIZADA COM SUCESSO"
                }
                await logs.createLog(log)
                success++;
            }catch(err){
                let message
                if(err.response && err.response.data){
                    message = JSON.stringify(err.response.data)
                }else{
                    message = "Erro não retornado na API"
                }
                const log:ILogs = {
                    integration_type: ApiTypes.API_CARGO,
                    integration_success: false,
                    sent_json: JSON.stringify({...office}),
                    message 
                }    
                await logs.createLog(log)
                error++;
            }
        }
        logger.info(`Integrado ${ success } cargos com sucesso e ${error} falhas na integração.`)
    }

}
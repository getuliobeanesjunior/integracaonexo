require('dotenv').config()
import axios from 'axios';
import { ApiTypes } from '../../utils/enumApiTypes';
import { sleep } from '../../utils/sleep';
import logs from '../application/logs';
import IEmployess from '../Interfaces/IEmployess';
import ILogs from '../Interfaces/ILogs';
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

    public async sendNewsEmployees( employees: Array<IEmployess> ){
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        for(const employee of employees){
            try{
                const result = await axios.post(`${url}api/Funcionario`, {...employee}, {headers}); 
                const log:ILogs = {
                    integration_type: ApiTypes.API_FUNCIONARIO,
                    integration_success: true,
                    sent_json: JSON.stringify({...result}),
                    message: "INTEGRAÇÃO REALIZADA COM SUCESSO"
                }
                await logs.createLog(log)
            }catch(err){
                let message
                if(err.response && err.response.data){
                    message = JSON.stringify(err.response.data)
                }else{
                    message = "Erro não retornado na API"
                }
                const log:ILogs = {
                    integration_type: ApiTypes.API_FUNCIONARIO,
                    integration_success: false,
                    sent_json: JSON.stringify({...employee}),
                    message: err.response.data.value || "Erro não retornado na API"
                }
    
                await logs.createLog(log)
            }
        }
    }

    public async sendNewsSectors( sectors: Array<ISector> ){
        const url:string = process.env.API_URL;
        const token:String = await ApiNexoManager.getToken({});
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        for(const sector of sectors){
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
            }
        }
    }

}
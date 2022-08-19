require('dotenv').config()
import axios from 'axios';
import { ApiTypes } from '../../utils/enumApiTypes';
import { sleep } from '../../utils/sleep';
import logs from '../application/logs';
import ILogs from '../Interfaces/ILogs';
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

            const {data} = await axios.post(`${url}NexoAPIRest/token`, body, {headers});

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

}
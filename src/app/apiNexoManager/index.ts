import axios from 'axios';
import { sleep } from '../../utils/sleep';

export class ApiNexoManager {

    static async getToken({
        maxRetries = 3,
        retries = 0,
        sleepTime = 800
    }): Promise<String>{

        const url = process.env.API_URL;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const body = {
            username: process.env.API_USER,
            password: process.env.API_PASSWORD,
            client_id: process.env.API_CLIENT_ID,
            grant_type: process.env.API_GRANT_TYPE
        }

        try{

            const {data} = await axios.post(`${url}NexoAPIRest/token`, body, {headers});

            return data.access_token;

        }catch(err){
            retries++
            await sleep(sleepTime)
        
            if(retries <= maxRetries){
                return this.getToken({ maxRetries, retries, sleepTime })
            }

            throw new Error(err)
        }

    }

}
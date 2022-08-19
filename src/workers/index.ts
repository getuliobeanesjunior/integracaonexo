import schedule from 'node-schedule';
import turnoStart from '../app/application/workers/turno';
import logger from '../utils/logger';


export default () : schedule.Job => {

    logger.info('INICIANDO WORKERS')

    return schedule.scheduleJob('53 13 * * *', ()=>{
        
        turnoStart.run();

    })
}
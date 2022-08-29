import schedule from 'node-schedule';
import turnoStart from '../app/application/workers/Turno';
import funcionarioStart from '../app/application/workers/Funcionario';
import logger from '../utils/logger';


export default () : schedule.Job => {

    logger.info('INICIANDO WORKERS')

    return schedule.scheduleJob('18 13 * * *', ()=>{
        
        turnoStart.run();

        funcionarioStart.run();

    })
}
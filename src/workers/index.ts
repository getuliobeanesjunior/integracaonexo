import schedule from 'node-schedule';
import turnoStart from '../app/application/workers/turno';
import funcionarioStart from '../app/application/workers/Funcionario';
import cargoStart from '../app/application/workers/Cargo';
import empresaStart from '../app/application/workers/Empresa';
import logger from '../utils/logger';


export default () : schedule.Job => {

    logger.info('INICIANDO WORKERS')

    return schedule.scheduleJob('18 13 * * *', ()=>{
        empresaStart.run();
        cargoStart.run();        
        turnoStart.run();
        funcionarioStart.run();
    })
}
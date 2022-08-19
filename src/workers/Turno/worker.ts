import logger from "../../utils/logger";
import execute from "./execute";
import forkyBase from '../../utils/forky';
const forkInstance = forkyBase.createInstance(logger);

forkInstance.exec(async() =>{
  try {
      logger.info('started process worker Turno');
  
      await execute(logger);
    } catch (error) {
      logger.error(`message: ${error.message} \n stack: ${error.stack}`);
    } finally {
      logger.info('finished process Turno');
    }
})

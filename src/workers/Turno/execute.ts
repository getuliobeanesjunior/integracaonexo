import { Logger } from "winston";
import { ApiNexoManager } from "../../app/apiNexoManager";
import ApiRmManager from "../../app/apiRmManager";


export default async (logger: Logger)=>{

    const apiRM = new ApiRmManager(); 

    logger.info("Recuperando dados de turno do RM.");
    const newsShifts = await apiRM.getNewShifts();

    const apiNexo = new ApiNexoManager();

    logger.info("Enviando dados de turno para nexo");
    await apiNexo.sendNewsShifts(newsShifts)


}
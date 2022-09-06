import { Logger } from "winston";
import { ApiNexoManager } from "../../app/apiNexoManager";
import ApiRmManager from "../../app/apiRmManager";


export default async (logger: Logger)=>{

    const apiRM = new ApiRmManager(); 

    logger.info("Recuperando dados de Setor do RM.");
    const newSectors = await apiRM.getNewSector();

    const apiNexo = new ApiNexoManager();

    logger.info("Enviando dados de Setor para nexo");
    const resultNexo = await apiNexo.sendNewsSectors(newSectors, logger)

    logger.info("DADOS DE SETOR ENVIADOS PARA O NEXO");


}
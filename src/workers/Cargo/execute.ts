import { Logger } from "winston";
import { ApiNexoManager } from "../../app/apiNexoManager";
import ApiRmManager from "../../app/apiRmManager";


export default async (logger: Logger)=>{

    const apiRM = new ApiRmManager(); 

    logger.info("Recuperando dados de Cargo do RM.");
    const newOffices = await apiRM.getNewOffice();

    logger.info(`Encontrados ${newOffices.length} novos cargos.`);

    const apiNexo = new ApiNexoManager();

    logger.info("Enviando dados de Cargo para nexo");
    await apiNexo.sendNewsOffices(newOffices, logger)

    logger.info("DADOS DE CARGO ENVIADOS PARA O NEXO");


}
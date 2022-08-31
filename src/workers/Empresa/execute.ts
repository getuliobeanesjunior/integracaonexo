import { Logger } from "winston";
import { ApiNexoManager } from "../../app/apiNexoManager";
import ApiRmManager from "../../app/apiRmManager";


export default async (logger: Logger)=>{

    const apiRM = new ApiRmManager(); 

    logger.info("Recuperando dados de Empresas do RM.");
    const newCompanies = await apiRM.getNewCompany();

    logger.info(`Encontradas ${newCompanies.length} novas empresas.`);

    const apiNexo = new ApiNexoManager();

    logger.info("Enviando dados de Empresa para nexo");
    await apiNexo.sendNewsCompanies(newCompanies, logger)

    logger.info("DADOS DE ENVIADOS ENVIADOS PARA O NEXO");


}
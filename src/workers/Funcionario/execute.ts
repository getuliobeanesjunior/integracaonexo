import { Logger } from "winston";
import { ApiNexoManager } from "../../app/apiNexoManager";
import ApiRmManager from "../../app/apiRmManager";


export default async (logger: Logger)=>{

    const apiRM = new ApiRmManager(); 

    logger.info("Recuperando dados de Funcionário do RM.");
    const newEmployees = await apiRM.getNewEmployees();

    const apiNexo = new ApiNexoManager();

    logger.info("Enviando dados de Funcionário para nexo");
    const resultNexo = await apiNexo.sendNewsEmployees(newEmployees)

    logger.info(resultNexo);


}
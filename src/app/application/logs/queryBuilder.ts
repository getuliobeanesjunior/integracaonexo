import QueryString from "qs";
import { FindOptionsWhere, Like } from "typeorm";
import Logs from "../../../database/entity/Logs";

export default (filter:QueryString.ParsedQs):FindOptionsWhere<Logs> => {
    const optionsWhere:FindOptionsWhere<Logs> = {};
    if(filter.integration_type){
        optionsWhere.integration_type = filter.integration_type as string;
    }
    if(filter.integration_success){
        optionsWhere.integration_success =  filter.integration_success === 'true';
    }
    return optionsWhere;
}
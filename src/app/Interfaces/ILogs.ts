import { ApiTypes } from "../../utils/enumApiTypes";

export default interface ILogs{
    integration_type: ApiTypes,
    integration_success: boolean,
    sent_json: string,
    message: string,
}
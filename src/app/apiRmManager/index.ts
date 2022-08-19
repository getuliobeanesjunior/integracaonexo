import ITurno from "../Interfaces/ITurno";
import moment from "moment";

export default class ApiRmManager {

    public async getNewShifts() : Promise<Array<ITurno>>{

        return [{
            "Codigo":"00001",
            "HoraInicio":moment().utc().format(),
            "HoraFim":"2019-12-30T13:33:55.901Z",
            "HoraInicioAlmoco":"2019-12-30T13:33:55.901Z",
            "HoraFimAlmoco":"2019-12-30T13:33:55.901Z",
            "UtilizarEscalaDeTrabalho":true,
            "Tipo":"F"
         }]

    }

    public getModifiedsShifts(){



    }

}
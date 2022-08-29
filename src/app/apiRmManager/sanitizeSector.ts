import ISector from "../Interfaces/ISector";

export default ( listSectors:Array<any> ): Array<ISector> =>{
    
    const sectors: ISector[] = [];

    for(const sector of listSectors){
        sectors.push({
            Codigo:sector["IDENTIFICADORSETOR"][0],
            Nome:sector["DESCRICAO"][0],
            HoraMes:null,
            Atividades:null,
            Equipamentos:null,
            ValidadeExames:null,
            Descricao:sector["DESCRICAO"][0],
            CodigoTipoSetorDeTrabalho:null,
            IdentificadorSetor:sector["IDENTIFICADORSETOR"][0],
            Ativo: sector["ATIVO"][0] === "1"
         })
    }

    return sectors;

};
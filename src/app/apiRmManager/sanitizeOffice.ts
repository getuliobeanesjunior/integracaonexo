import IOffice from "../Interfaces/IOffice";

export default ( ListOffices:Array<any> ): Array<IOffice> =>{
    
    const offices: IOffice[] = [];

    for(const office of ListOffices){
        offices.push({
            Codigo:office["IDENTIFICADOR"] ? office["IDENTIFICADOR"][0] : null,
            Nome:office["NOME"] ? office["NOME"][0] : null,
            Periodicidade:null,
            CBO:office["CBO"] ? office["CBO"][0] : null,
            Identificador:office["IDENTIFICADOR"] ? office["IDENTIFICADOR"][0] : null,
            Ativo:office["ATIVO"] && office["ATIVO"][0] === '1',
            Descricao:office["CODIGO"] ? office["CODIGO"][0] : null,
            CodigoTipoAtividadeProfissional:null
         })
    }

    return offices;

};
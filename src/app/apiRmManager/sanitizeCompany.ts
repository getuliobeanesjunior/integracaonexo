import ICompany from "../Interfaces/ICompany";
import moment from "moment";

export default ( listCompanies:Array<any> ): Array<ICompany> =>{
    
    const companies: ICompany[] = [];

    for(const employee of listCompanies){
        companies.push({
            Codigo:employee["CODCOLIGADA"] ? employee["CODCOLIGADA"][0].padStart(6, "0") : null,
            Nome:employee["NOME"] ? employee["NOME"][0] : null,
            CodigoGrauDeRisco:employee["GRAUDERISCOCODIGO"] ? employee["GRAUDERISCOCODIGO"][0] : null,
            CodigoAtividade:null,
            NomeFantasia:employee["NOMEFANTASIA"] ? employee["NOMEFANTASIA"][0] : null,
            InscricaoEstadual:employee["INSCRICAOESTADUAL"] ? employee["INSCRICAOESTADUAL"][0] : null,
            Ddd1:employee["DDD1"] ? employee["DDD1"][0] : null,
            Telefone1:employee["TEL1"] ? employee["TEL1"][0] : null,
            Ddd2:employee["DDD11"] ? employee["DDD11"][0] : null,
            Telefone2:employee["TEL2"] ? employee["TEL2"][0] : null,
            Endereco:employee["ENDERECO"] ? employee["ENDERECO"][0] : null,
            Numero:employee["NUMERO"] && !isNaN(parseInt(employee["NUMERO"][0])) ? parseInt(employee["NUMERO"][0]) : null,
            Complemento:employee["COMPLEMENTO"] ? employee["COMPLEMENTO"][0] : null,
            Bairro:employee["BAIRRO"] ? employee["BAIRRO"][0] : null,
            Cidade:employee["CIDADE"] ? employee["CIDADE"][0] : null,
            Estado:employee["ESTADO"] ? employee["ESTADO"][0] : null,
            Cep:employee["CEP"] ? employee["CEP"][0] : null,
            CNPJ:employee["CNPJ"] ? employee["CNPJ"][0].replace(/\D/g, "") : null,
            Desativada:employee["DESATIVADA"] && employee["DESATIVADA"][0] !== '0',
            Email:employee["EMAIL"] ? employee["EMAIL"][0] : null,
            CodigoNucleoDeAtendimento:null,
            TipoCnpj:employee["TIPOCNOJ"] ? employee["TIPOCNOJ"][0] : null,
            referenciaDeProgramacaoExame:null,
            CodigoClinicaPadrao: null,
            CodigoResponsavelSeguranca:null,
            CodigoMedicoCoordenador:null,
            DataInicioHistoricoMedicoCoordenador:null,
            DataFimHistoricoMedicoCoordenador:null
         })
    }

    return companies;

};
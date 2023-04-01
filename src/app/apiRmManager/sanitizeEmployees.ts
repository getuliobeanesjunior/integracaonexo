import IEmployess from "../Interfaces/IEmployess";
import moment from "moment";

export default ( listEmployess:Array<any> ): Array<IEmployess> =>{
    
    const employees: IEmployess[] = [];

    for(const employee of listEmployess){
        employees.push({
            CodigoEmpresa:employee["CODIGOEMPRESA"] ? employee["CODIGOEMPRESA"][0] : null,
            Codigo:employee["CODIGO"] ? employee["CODIGO"][0] : null,
            Nome:employee["NOME"] ? employee["NOME"][0] : null,
            CodigoLotacao:employee["LOTACAO"] ? employee["LOTACAO"][0] : null,
            Telefone:employee["TELEFONE1"] ? employee["TELEFONE1"][0] : null,
            CodigoSetor:employee["CODIGOSETOR"] ? employee["CODIGOSETOR"][0] : null,
            CodigoCargo:employee["CODIGOCARGO"] ? employee["CODIGOCARGO"][0] : null,
            CodigoClassificador:null,
            DataAdmissao:employee["DATAADMISSAO"] ? moment.utc(employee["DATAADMISSAO"][0], 'DD/MM/YYYY').format() : null,
            CodigoUsuario:null,
            Ativo: employee["ATIVO"][0] === 1,
            CodigoTipoFuncionario:null,
            DataNascimento:employee["DATANASCIMENTO"] ? moment.utc(employee["DATANASCIMENTO"][0], 'DD/MM/YYYY').format() : null,
            DataDemissao:employee["DATADEMISSAO"] ? moment(employee["DATADEMISSAO"][0]).utc().format() : null,
            CarteiraDeTrabalho:employee["CARTEIRADETRABALHO"] ? employee["CARTEIRADETRABALHO"][0] : null,
            NumeroDeSerieDaCarteiraDeTrabalho:employee["NUMERODESERIE"] ? employee["NUMERODESERIE"][0] : null,
            Sexo:employee["SEXO"] ? employee["SEXO"][0] : null,
            EstadoCivil:employee["ESTADOCIVIL"] ? employee["ESTADOCIVIL"][0].toUpperCase() : null,
            CodigoTurno: null,
            Endereco:employee["RUA"] ? employee["RUA"][0] : null,
            Numero:employee["NUMERO"] ? parseInt(employee["NUMERO"][0]) : 0,
            Bairro:employee["BAIRRO"] ? employee["BAIRRO"][0] : null,
            Cidade:employee["CIDADE"] ? employee["CIDADE"][0] : null,
            Cep:employee["CEP"] ? employee["CEP"][0] : null,
            TipoSanguineo:null,
            EhFuncionario:employee["EHFUNCIONARIO"][0] === "1",
            RG:employee["RG"] ? employee["RG"][0] : null,
            Observacao:null,
            Email:employee["EMAIL"] ? employee["EMAIL"][0] : null,
            Escolaridade:employee["ESCOLARIDADE"] ? employee["ESCOLARIDADE"][0] : null,
            UfCarteiraDeTrabalho:employee["UFCARTEIRATRABALHO"] ? employee["UFCARTEIRATRABALHO"][0] : null,
            MesDeReferencia:0,
            UfRG:employee["UFRG"] ? employee["UFRG"][0] : null,
            Uf:employee["UF"] ? employee["UF"][0] : null,
            NomeMae:null,
            DataDeEmissao:employee["EMISSAODACARTEIRADETRABALHO"] ? moment(employee["EMISSAODACARTEIRADETRABALHO"][0]).utc().format() : null,
            DataEmissaoRG:employee["DATAEMISSAORG"] ? moment(employee["DATAEMISSAORG"][0]).utc().format() : null,
            OrgaoEmissorRG:employee["ORGAOEMISSORRG"] ? employee["ORGAOEMISSORRG"][0] : null,
            PIS:employee["PISPASEP"] ? employee["PISPASEP"][0] : null,
            Salario:employee["SALARIO"] ? parseFloat(employee["SALARIO"][0]) : 0,
            NumerodoRegistro:employee["NUMERODOREGISTRO"] ? employee["NUMERODOREGISTRO"][0] : null,
            CPF:employee["CPF"] ? employee["CPF"][0] : null,
            Cbo:null,
            FiliacaoPrevidenciaSocial:null,
            Aposentado:false,
            SituacaoBeneficiario:null,
            CodigoRaca:null,
            DataInicioHistorico: employee["DATAINICIOHISTORICO"] ? employee["DATAINICIOHISTORICO"] : null,
            DataFinalHistorico: employee["DATAFINALHISTORICO"] ? employee["DATAFINALHISTORICO"] : null,
            DataInicioHistoricoCargo: employee["DATAINICIOHISTORICOCARGO"] ? employee["DATAINICIOHISTORICOCARGO"] : null,
            DataFinalHistoricoCargo: employee["DATAFINALHISTORICOCARGO"] ? employee["DATAFINALHISTORICOCARGO"] : null,
            DataInicioHistoricoSetor: employee["DATAINICIOHISTORICOSETOR"] ? employee["DATAINICIOHISTORICOSETOR"] : null,
            DataFinalHistoricoSetor: employee["DATAFINALHISTORICOSETOR"] ? employee["DATAFINALHISTORICOSETOR"] : null,
            DataInicioHistoricoLotacao: employee["DATAINICIOHISTORICOLOTACAO"] ? employee["DATAINICIOHISTORICOLOTACAO"] : null,
            DataFinalHistoricoLotacao: employee["DATAFINALHISTORICOLOTACAO"] ? employee["DATAFINALHISTORICOLOTACAO"] : null,
            DataInicioHistoricoTurno: employee["DATAINICIOHISTORICOTURNO"] ? employee["DATAINICIOHISTORICOTURNO"] : null,
            DataFinalHistoricoTurno: employee["DATAFINALHISTORICOTURNO"] ? employee["DATAFINALHISTORICOTURNO"] : null
        })
    }

    return employees;

};
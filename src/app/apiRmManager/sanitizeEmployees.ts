import IEmployess from "../Interfaces/IEmployess";

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
            DataAdmissao:employee["DATAADMISSAO"] ? employee["DATAADMISSAO"][0] : null,
            CodigoUsuario:null,
            Ativo: employee["ATIVO"][0] === 1,
            CodigoTipoFuncionario:null,
            DataNascimento:employee["DATANASCIMENTO"] ? employee["DATANASCIMENTO"][0] : null,
            DataDemissao:employee["DATADEMISSAO"] ? employee["DATADEMISSAO"][0] : null,
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
            DataDeEmissao:employee["EMISSAODACARTEIRADETRABALHO"] ? employee["EMISSAODACARTEIRADETRABALHO"][0] : null,
            DataEmissaoRG:employee["DATAEMISSAORG"] ? employee["DATAEMISSAORG"][0] : null,
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
            DataInicioHistorico: employee["DATAINICIOHISTORICO"] ? employee["DATAINICIOHISTORICO"][0] : null,
            DataFinalHistorico: employee["DATAFINALHISTORICO"] ? employee["DATAFINALHISTORICO"][0] : null,
            DataInicioCargo: employee["DATAINICIOHISTORICOCARGO"] ? employee["DATAINICIOHISTORICOCARGO"][0] : null,
            DataFinalCargo: employee["DATAFINALHISTORICOCARGO"] ? employee["DATAFINALHISTORICOCARGO"][0] : null,
            DataInicioSetor: employee["DATAINICIOHISTORICOSETOR"] ? employee["DATAINICIOHISTORICOSETOR"][0] : null,
            DataFinalSetor: employee["DATAFINALHISTORICOSETOR"] ? employee["DATAFINALHISTORICOSETOR"][0] : null,
            DataInicioLotacao: employee["DATAINICIOHISTORICOLOTACAO"] ? employee["DATAINICIOHISTORICOLOTACAO"][0] : null,
            DataFinalLotacao: employee["DATAFINALHISTORICOLOTACAO"] ? employee["DATAFINALHISTORICOLOTACAO"][0] : null,
            DataInicioTurno: employee["DATAINICIOHISTORICOTURNO"] ? employee["DATAINICIOHISTORICOTURNO"][0] : null,
            DataFinalTurno: employee["DATAFINALHISTORICOTURNO"] ?  employee["DATAFINALHISTORICOTURNO"] [0] : null
        })
    }

    return employees;

};
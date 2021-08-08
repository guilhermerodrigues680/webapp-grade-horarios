import { HorarioAula } from "@/models/HorarioAula";

class Api {
  constructor() {
    console.debug("Criada instância Api");
  }

  getHorarios(): Promise<Array<HorarioAula>> {
    return new Promise((resolve) => {
      resolve(
        [
          {
            DataInicio: "2021-08-02T07:10:00",
            DataFim: "2021-08-02T08:50:00",
            NomeDisciplina: "Teste manha",
            CodTurmaExibicao: "1263.1.01",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-02T13:10:00",
            DataFim: "2021-08-02T14:50:00",
            NomeDisciplina: "Teste tarde",
            CodTurmaExibicao: "1263.1.01",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-02T17:10:00",
            DataFim: "2021-08-02T18:50:00",
            NomeDisciplina: "FILOSOFIA: ANTROPOLOGIA E ÉTICA",
            CodTurmaExibicao: "1263.1.01",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-02T20:50:00",
            DataFim: "2021-08-02T22:30:00",
            NomeDisciplina: "ALGORITMOS E ESTRUTURAS DE DADOS II",
            CodTurmaExibicao: "0929.1.00",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-03T20:50:00",
            DataFim: "2021-08-03T22:30:00",
            NomeDisciplina: "ALGORITMOS E ESTRUTURAS DE DADOS II",
            CodTurmaExibicao: "0929.1.02",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-04T19:00:00",
            DataFim: "2021-08-04T20:40:00",
            NomeDisciplina: "GERÊNCIA DE PROJETOS DE SOFTWARE",
            CodTurmaExibicao: "4624.1.01",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-05T19:00:00",
            DataFim: "2021-08-05T20:40:00",
            NomeDisciplina: "ALGORITMOS E ESTRUTURAS DE DADOS II",
            CodTurmaExibicao: "0929.1.00",
            LocalAula: "Local não cadastrado",
          },
          {
            DataInicio: "2021-08-06T17:10:00",
            DataFim: "2021-08-06T18:50:00",
            NomeDisciplina: "INTRODUÇÃO À PESQUISA EM INFORMÁTICA",
            CodTurmaExibicao: "0939.1.00",
            LocalAula: "Local não cadastrado",
          },
        ].map((el) => ({
          ...el,
          DataInicio: new Date(el.DataInicio),
          DataFim: new Date(el.DataFim),
        }))
      );
    });
  }
}

export default new Api();

import { HorarioAulaDTO } from "@/models/HorarioAula";
import { format, addWeeks, startOfWeek, differenceInWeeks } from "date-fns";

export default class HorarioDB {
  private static db: Array<HorarioAulaDTO> = [
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
  ];

  public static getHorarios(): Array<HorarioAulaDTO> {
    return this.db;
  }

  public static getHorariosPeriodo(anyDateOfWeek: Date): Array<HorarioAulaDTO> {
    return this.db.map((h) => {
      const dataInicio = new Date(h.DataInicio);
      const dataFim = new Date(h.DataFim);

      // Semana de destino
      const s1 = startOfWeek(anyDateOfWeek);
      // Semana de origem
      const s2 = startOfWeek(dataInicio);

      // differenceInWeeks retorna positivo se today estiver a frente da data
      // differenceInWeeks retorna negativo se today estiver atras da data
      const diff = differenceInWeeks(s1, s2);

      return {
        ...h,
        DataInicio: format(addWeeks(dataInicio, diff), "yyyy-MM-dd'T'HH:mm:ss"),
        DataFim: format(addWeeks(dataFim, diff), "yyyy-MM-dd'T'HH:mm:ss"),
      };
    });
  }
}

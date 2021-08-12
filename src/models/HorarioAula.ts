export type HorarioAulaDTO = {
  DataInicio: string;
  DataFim: string;
  NomeDisciplina: string;
  CodTurmaExibicao: string;
  LocalAula: string;
};

export type HorarioAula = {
  DataInicio: Date;
  DataFim: Date;
  NomeDisciplina: string;
  CodTurmaExibicao: string;
  LocalAula: string;
};

import HorarioDB from "./HorarioDB";
import { HorarioAula } from "@/models/HorarioAula";

class Api {
  constructor() {
    console.debug("Criada instância Api");
  }

  getHorarios(): Promise<Array<HorarioAula>> {
    return new Promise((resolve) => {
      resolve(
        HorarioDB.getHorarios().map((el) => ({
          ...el,
          DataInicio: new Date(el.DataInicio),
          DataFim: new Date(el.DataFim),
        }))
      );
    });
  }

  getHorariosPeriodo(sunday: Date): Promise<Array<HorarioAula>> {
    return new Promise((resolve) => {
      resolve(
        HorarioDB.getHorariosPeriodo(sunday).map((el) => ({
          ...el,
          DataInicio: new Date(el.DataInicio),
          DataFim: new Date(el.DataFim),
        }))
      );
    });
  }
}

export default new Api();

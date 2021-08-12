export default class DateUtils {
  private constructor() {
    // construtor privado, fazendo a Classe ser Final e não poder ser herdada.
  }

  // public static capitalizeFirstLetter(s: string) {
  //   return s.charAt(0).toUpperCase() + s.slice(1);
  // }

  public static monthNameLong(d: Date): string {
    return d.toLocaleString("pt-BR", { month: "long" });
  }

  public static monthNameShort(d: Date): string {
    return d.toLocaleString("pt-BR", { month: "short" });
  }

  public static getSunday(d: Date): Date {
    const dayWeek = d.getDay();
    const date = new Date(d);
    date.setDate(d.getDate() - dayWeek);
    return date;
  }

  public static getMonday(d: Date): Date {
    const MONDAY_DAY_WEEK = 1;
    const date = this.getSunday(d);
    date.setDate(date.getDate() + MONDAY_DAY_WEEK);
    return date;
  }

  public static getSaturday(d: Date): Date {
    const MONDAY_DAY_WEEK = 6;
    const date = this.getSunday(d);
    date.setDate(date.getDate() + MONDAY_DAY_WEEK);
    return date;
  }

  public static sumDays(d: Date, days: number): Date {
    // console.debug(d, days);
    const date = new Date(d);
    date.setDate(date.getDate() + days);
    return date;
  }
}

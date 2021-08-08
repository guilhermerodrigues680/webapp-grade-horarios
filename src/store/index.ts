type StoreState = {
  now: Date;
};

class Store {
  public state: StoreState;
  private debug: boolean;

  constructor() {
    console.debug("Criada instância Store");
    this.debug = false;
    this.state = {
      now: new Date("2021-08-02T07:50:00"),
    };
  }

  incrementNow(): void {
    if (this.debug) console.log("incrementNow triggered");
    const MS = 60000;
    const diff = 10; // 10 minutes
    this.state.now = new Date(this.state.now.getTime() + diff * MS);
  }

  decrementNow(): void {
    if (this.debug) console.log("decrementNow triggered");
    const MS = 60000;
    const diff = 10; // 10 minutes
    this.state.now = new Date(this.state.now.getTime() - diff * MS);
  }
}

const storeInstance = new Store();
export { StoreState, storeInstance as Store };

import { makeAutoObservable } from "mobx";

class AccountStore {
  contas = [];

  constructor() {
    makeAutoObservable(this);
  }

  adicionarConta(conta) {
    this.contas.push(conta);
  }
}

export const contasStore = new AccountStore();

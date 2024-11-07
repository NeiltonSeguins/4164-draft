import { autorun, makeAutoObservable } from "mobx";

class AccountStore {
  contas = [];

  constructor() {
    makeAutoObservable(this);
    this.carregarDoLocalStorage();

    autorun(() => {
      localStorage.setItem("contas", JSON.stringify(this.contas));
    });
  }

  carregarDoLocalStorage() {
    const dados = localStorage.getItem("contas");
    if (dados) {
      this.contas = JSON.parse(dados);
    }
  }

  adicionarConta(conta) {
    this.contas.push(conta);
  }
}

export const contasStore = new AccountStore();

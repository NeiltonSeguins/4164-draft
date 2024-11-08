import { autorun, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class ContasStore {
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
    this.contas.push({ id: uuidv4(), ...conta });
  }
}

export const contasStore = new ContasStore();

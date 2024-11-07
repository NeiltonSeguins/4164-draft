import { autorun, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class TransactionStore {
  transacoes = [];

  constructor() {
    makeAutoObservable(this);
    this.carregarDoLocalStorage();

    autorun(() => {
      localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
    });
  }

  carregarDoLocalStorage() {
    const dados = localStorage.getItem("transacoes");
    if (dados) {
      this.transacoes = JSON.parse(dados);
    }
  }

  adicionarTransacao(transacao) {
    this.transacoes.push({ id: uuidv4(), ...transacao });
  }

  get gastosPorCategoria() {
    return this.transacoes
      .filter((transacao) => transacao.tipo === "despesa")
      .reduce((valorAcumulado, transacao) => {
        valorAcumulado[transacao.categoria] =
          (valorAcumulado[transacao.categoria] || 0) +
          parseFloat(transacao.valor);
        return valorAcumulado;
      }, {});
  }
}

export const transactionStore = new TransactionStore();

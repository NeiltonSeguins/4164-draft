import { makeAutoObservable } from "mobx";

class TransactionStore {
  transacoes = [];

  constructor() {
    makeAutoObservable(this);
  }

  adicionarTransacao(transacao) {
    this.transacoes.push(transacao);
  }

  get despesasCategorizadas() {
    return this.transacoes.reduce((categorias, transacao) => {
      if (transacao.tipo === "despesa") {
        if (!categorias[transacao.categoria]) {
          categorias[transacao.categoria] = 0;
        }
        categorias[transacao.categoria] += transacao.valor;
      }
      return categorias;
    }, {});
  }
}

export const transactionStore = new TransactionStore();

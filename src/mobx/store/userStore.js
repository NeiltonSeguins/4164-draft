import { makeAutoObservable } from "mobx";

class UserStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;

  constructor() {
    makeAutoObservable(this);
  }

  definirDadosUsuario({ nome, renda, objetivoFinanceiro }) {
    this.nome = nome;
    this.renda = renda;
    this.objetivoFinanceiro = objetivoFinanceiro;
    this.calcularOrcamentoDiario();
  }

  calcularOrcamentoDiario() {
    this.orcamentoDiario = Math.floor(this.renda / 30);
  }

  get progressoMeta() {
    const metas = {
      economizar: this.renda * 0.2,
      investir: this.renda * 0.15,
      "controlar-gastos": this.renda * 0.8,
    };

    const meta = metas[this.objetivoFinanceiro] || 0;

    if (this.objetivoFinanceiro === "controlar-gastos") {
      return meta
        ? (((meta - this.orcamentoDiario) / meta) * 100).toFixed(2)
        : 0;
    }

    return meta ? ((this.orcamentoDiario / meta) * 100).toFixed(2) : 0;
  }
}

export const userStore = new UserStore();

import { makeAutoObservable, autorun, reaction } from "mobx";

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;
  objetivosTipos = {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  };

  constructor() {
    makeAutoObservable(this);
    this.carregarDoLocalStorage();

    reaction(
      () => this.orcamentoDiario,
      () => console.log("Orçamento diário atualizado")
    );

    autorun(() => {
      const userState = {
        nome: this.nome,
        renda: this.renda,
        objetivoFinanceiro: this.objetivoFinanceiro,
        orcamentoDiario: this.orcamentoDiario,
      };
      localStorage.setItem("usuario", JSON.stringify(userState));
    });
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

  atualizarOrcamento(transacao) {
    let valor = Math.abs(transacao.valor);

    if (transacao.tipo !== "receita") {
      valor = -valor;
    }

    this.orcamentoDiario += parseFloat(valor);
  }

  atualizarOrcamentoComSaldo(saldo) {
    this.orcamentoDiario += parseFloat(saldo);
  }

  get objetivoFinanceiroAtual() {
    return this.objetivosTipos[this.objetivoFinanceiro] || "";
  }

  get progressoMeta() {
    const metas = {
      economizar: this.renda * 0.2,
      investir: this.renda * 0.15,
      "controlar-gastos": this.renda * 0.8,
    };

    const meta = metas[this.objetivoFinanceiro] || 0;

    if (this.objetivoFinanceiro === "controlar-gastos") {
      return meta ? ((meta - this.orcamentoDiario) / meta) * 100 : 0;
    }

    return meta ? (this.orcamentoDiario / meta) * 100 : 0;
  }

  carregarDoLocalStorage() {
    const dados = localStorage.getItem("usuario");
    if (dados) {
      const { nome, renda, objetivoFinanceiro, orcamentoDiario } =
        JSON.parse(dados);
      this.nome = nome;
      this.renda = renda;
      this.objetivoFinanceiro = objetivoFinanceiro;
      this.orcamentoDiario = orcamentoDiario;
    }
  }
}

export const usuarioStore = new UsuarioStore();

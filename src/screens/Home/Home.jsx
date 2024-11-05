import BarraLateral from "@components/BarraLateral";
import BarraPesquisa from "@components/BarraPesquisa";
import SaudacaoUsuario from "@components/SaudacaoUsuario";
import OrcamentoDiario from "@components/OrcamentoDiario/OrcamentoDiario";
import MetaFinanceira from "@components/MetaFinanceira";
import Transacoes from "@components/Transacoes/Transacoes";
import Contas from "@components/Contas/Contas";
import BalancoFinanceiro from "@components/BalancoFinanceiro";
import { Container, Movimentacoes, Orcamento } from "./style";

const transacoes = [
  {
    id: 1,
    nome: "Compra de supermercado",
    valor: 150,
    tipo: "despesa",
    categoria: "Alimentação",
    data: "2024-10-10",
  },
  {
    id: 2,
    nome: "Pagamento de aluguel",
    valor: 1000,
    tipo: "despesa",
    categoria: "Moradia",
    data: "2024-10-05",
  },
  {
    id: 3,
    nome: "Recebimento de salário",
    valor: 3000,
    tipo: "receita",
    categoria: "Renda",
    data: "2024-10-01",
  },
];

const contas = [
  { id: 1, banco: "Anybank", saldo: 1500 },
  { id: 2, banco: "Bytebank", saldo: 2500 },
  { id: 3, banco: "Swiftbank", saldo: 3200 },
];

function Home() {
  return (
    <Container>
      <BarraLateral />
      <BarraPesquisa />
      <SaudacaoUsuario />
      <Orcamento>
        <OrcamentoDiario />
        <MetaFinanceira />
      </Orcamento>
      <Movimentacoes>
        <Transacoes transacoes={transacoes} />
        <Contas contas={contas} />
      </Movimentacoes>
      <BalancoFinanceiro />
    </Container>
  );
}

export default Home;

import BarraLateral from "@components/BarraLateral";
import BarraPesquisa from "@components/BarraPesquisa";
import SaudacaoUsuario from "@components/SaudacaoUsuario";
import OrcamentoDiario from "@components/OrcamentoDiario/OrcamentoDiario";
import MetaFinanceira from "@components/MetaFinanceira";
import Transacoes from "@components/Transacoes/Transacoes";
import Contas from "@components/Contas/Contas";
import BalancoFinanceiro from "@components/BalancoFinanceiro";
import { Container, Movimentacoes, Orcamento } from "./style";

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
        <Transacoes />
        <Contas contas={contas} />
      </Movimentacoes>
      <BalancoFinanceiro />
    </Container>
  );
}

export default Home;

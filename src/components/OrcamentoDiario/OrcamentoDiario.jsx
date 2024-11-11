import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import { Descricao } from "../Cartao";
import { observer } from "mobx-react";
import { useStoreContext } from "src/mobx/store/storeContext";

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const OrcamentoDiario = observer(() => {
  const { usuarioStore } = useStoreContext();
  const orcamentoDiario = usuarioStore.orcamentoDiario;

  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>{formatador.format(orcamentoDiario)}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
});
export default OrcamentoDiario;

import Cartao from "../Cartao/Cartao";
import CartaoCabecalho from "../Cartao/CartaoCabecalho/CartaoCabecalho";
import CartaoCorpo from "../Cartao/CartaoCorpo/CartaoCorpo";
import { Descricao } from "../Cartao";
import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "src/mobx/store/storeContext";

const OrcamentoDiario = observer(() => {
  const { userStore } = useContext(StoreContext);
  const orcamentoDiario = userStore.orcamentoDiario;

  return (
    <Cartao>
      <CartaoCabecalho>Orçamento diário disponível</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>{orcamentoDiario}</Descricao>
      </CartaoCorpo>
    </Cartao>
  );
});
export default OrcamentoDiario;

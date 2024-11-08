import { useContext, useState } from "react";
import MoneyIcon from "@components/Icones/MoneyIcon/MoneyIcon";
import { Container, ListaMovimentacoes } from "@components/Contas/Contas";
import Transacao from "./Transacao/Transacao";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import Botao from "@components/Botao";
import TransacaoModal from "./TransacaoModal";
import { observer } from "mobx-react";
import { StoreContext } from "src/mobx/store/storeContext";

const Transacoes = observer(() => {
  const { transacoesStore } = useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {transacoesStore.transacoes.map((transacao) => (
            <Transacao key={transacao.id} transacao={transacao} />
          ))}
        </ListaMovimentacoes>
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <MoneyIcon />
          Adicionar transação
        </Botao>
        {isModalOpen && (
          <TransacaoModal
            isOpen={isModalOpen}
            onCloseModal={() => handleCloseModal()}
          />
        )}
      </Container>
    </Cartao>
  );
});
export default Transacoes;

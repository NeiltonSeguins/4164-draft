import { useState } from "react";
import Conta from "./Conta/Conta";
import styled from "styled-components";
import CampoTexto from "@components/CampoTexto";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import Botao from "@components/Botao";
import Modal from "@components/Modal";
import Form from "@components/Form";
import Label from "@components/Label";
import Fieldset from "@components/Fieldset";
import { WalletIcon } from "@components/Icones";
import CartaoCorpo from "@components/Cartao/CartaoCorpo/CartaoCorpo";

export const Container = styled(CartaoCorpo)`
  padding: var(--padding-l) var(--padding-m);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListaMovimentacoes = styled.ul`
  list-style: none;
  color: var(--cor-primaria);
  margin: 0;
  padding-left: 0px;
  padding-bottom: var(--padding-m);
  width: 100%;
  height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Contas = ({contas}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaConta, setNovaConta] = useState({
    banco: "",
    saldo: 0,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const aoAdicionarConta = () => {
    handleCloseModal();
  };

  return (
    <Cartao>
      <CartaoCabecalho>Minhas contas</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {contas.map((conta) => (
            <Conta key={conta.id} conta={conta} />
          ))}
        </ListaMovimentacoes>
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <WalletIcon />
          Adicionar conta
        </Botao>
        {isModalOpen && (
          <Modal
            aoFechar={() => handleCloseModal()}
            estaAberta={isModalOpen}
            aoClicar={() => aoAdicionarConta()}
            titulo="Adicionar conta bancária"
            icon={<WalletIcon />}
          >
            <Form>
              <Fieldset>
                <Label htmlFor="banco">Banco</Label>
                <CampoTexto
                  type="text"
                  id="banco"
                  placeholder="Ex: Anybank"
                  value={novaConta.banco}
                  onChange={(e) =>
                    setNovaConta({ ...novaConta, banco: e.target.value })
                  }
                />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="saldo">Saldo</Label>
                <CampoTexto
                  type="number"
                  id="saldo"
                  placeholder="R$ 500,00"
                  value={novaConta.saldo}
                  onChange={(e) =>
                    setNovaConta({ ...novaConta, saldo: e.target.value })
                  }
                />
              </Fieldset>
            </Form>
          </Modal>
        )}
      </Container>
    </Cartao>
  );
};
export default Contas;

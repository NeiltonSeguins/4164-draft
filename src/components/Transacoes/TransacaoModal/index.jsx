import React, { useState } from "react";
import CampoTexto from "@components/CampoTexto";
import Fieldset from "@components/Fieldset";
import Form from "@components/Form";
import { MoneyIcon } from "@components/Icones";
import Label from "@components/Label";
import Modal from "@components/Modal";
import { SelectGroup, SelectOption } from "@components/Select";

const TransacaoModal = ({ isOpen, onCloseModal }) => {
  const [novaTransacao, setNovaTransacao] = useState({
    nome: "",
    valor: 0,
    tipo: "",
    categoria: "",
    data: "",
  });

  const aoSubmeterFormModal = () => {
    onCloseModal();
  };

  return (
    <Modal
      aoFechar={() => onCloseModal()}
      titulo="Adicionar transação"
      estaAberta={isOpen}
      icon={<MoneyIcon />}
      aoClicar={() => aoSubmeterFormModal()}
    >
      <Form>
        <Fieldset>
          <Label htmlFor="nomeTransacao">Nome da transação</Label>
          <CampoTexto
            type="text"
            id="nomeTransacao"
            placeholder="Ex: Compra na padaria"
            value={novaTransacao.nome}
            onChange={(e) =>
              setNovaTransacao({ ...novaTransacao, nome: e.target.value })
            }
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="valor">Valor</Label>
          <CampoTexto
            type="number"
            id="valor"
            placeholder="10"
            value={novaTransacao.valor}
            onChange={(e) =>
              setNovaTransacao({
                ...novaTransacao,
                valor: e.target.value,
              })
            }
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="tipo">Tipo</Label>
          <SelectGroup
            id="tipo"
            value={novaTransacao.tipo}
            onChange={(e) =>
              setNovaTransacao({
                ...novaTransacao,
                tipo: e.target.value,
              })
            }
          >
            <SelectOption value="">Selecione o tipo</SelectOption>
            <SelectOption value="receita">Receita</SelectOption>
            <SelectOption value="despesa">Despesa</SelectOption>
          </SelectGroup>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="valor">Data</Label>
          <CampoTexto
            type="date"
            id="valor"
            placeholder="dd/mm/aaaa"
            value={novaTransacao.data}
            onChange={(e) =>
              setNovaTransacao({
                ...novaTransacao,
                data: e.target.value,
              })
            }
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="categoria">Categoria</Label>
          <CampoTexto
            type="text"
            id="categoria"
            placeholder="Alimentação"
            value={novaTransacao.categoria}
            onChange={(e) =>
              setNovaTransacao({
                ...novaTransacao,
                categoria: e.target.value,
              })
            }
          />
        </Fieldset>
      </Form>
    </Modal>
  );
};

export default TransacaoModal;

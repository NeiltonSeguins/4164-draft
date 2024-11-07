import styled from "styled-components";

export const ItemTransacao = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--padding-m);
  border-bottom: 1px solid var(--cor-neutra-medium);
  margin-top: 24px;
  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const TituloTransacao = styled.div`
  color: ${(props) =>
    props.$tipo === "receita"
      ? "var(--cor-secundaria-receita)"
      : "var(--cor-secundaria-despesa)"};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--gap-xs);

  & > h3 {
    margin: 0;
  }
`;

export const SaldoTransacao = styled.div`
  text-align: start;
  color: var(--cor-neutra-light);
  & > p {
    margin: 0;
    margin-bottom: 8px;
  }
`;

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const formataData = (data) => {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
};

const Transacao = ({ transacao }) => {
  return (
    <ItemTransacao>
      <TituloTransacao $tipo={transacao.tipo}>
        <h3>{transacao.nome}</h3>
        <span>{formatador.format(transacao.valor)}</span>
      </TituloTransacao>
      <SaldoTransacao>
        <p>{formataData(transacao.data)}</p>
      </SaldoTransacao>
    </ItemTransacao>
  );
};

export default Transacao;

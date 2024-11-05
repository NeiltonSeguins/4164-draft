import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto auto 1fr auto;
  gap: var(--gap-s);
  min-width: 1260px;
  box-sizing: border-box;
  grid-template-areas:
    "sidebar search"
    "sidebar usuario"
    "sidebar orcamento"
    "sidebar movimentacoes"
    "sidebar chart";
`;

export const Orcamento = styled.section`
  grid-area: orcamento;
  display: flex;
  justify-content: space-between;
  gap: var(--gap-l);
`;

export const Movimentacoes = styled.section`
  grid-area: movimentacoes;
  display: flex;
  gap: var(--gap-l);
`;

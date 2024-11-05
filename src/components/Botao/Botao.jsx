import styled from "styled-components";

const varianteCores = {
  primario: {
    background: "var(--cor-primaria)",
    border: "var(--cor-primaria)",
    color: "var(--cor-neutra-dark)",
  },
  secundario: {
    background: "transparent",
    border: "var(--cor-primaria)",
    color: "var(--cor-primaria)",
  },
  neutro: {
    background: "transparent",
    border: "var(--cor-neutra-light)",
    color: "var(--cor-neutra-light)",
  },
};

const Botao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  background-color: ${(props) => varianteCores[props.$variante]?.background};
  border: 1px solid ${(props) => varianteCores[props.$variante]?.border};
  border-radius: var(--border-radius-l);
  padding: var(--padding-xs) var(--padding-m);
  color: ${(props) => varianteCores[props.$variante]?.color};
  cursor: pointer;
  font-size: var(--fonte-md);
`;

export default Botao;

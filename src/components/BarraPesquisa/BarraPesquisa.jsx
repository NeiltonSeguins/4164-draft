import CampoTexto from "@components/CampoTexto";
import { SearchIcon } from "@components/Icones";
import styled from "styled-components";

export const StyledLabel = styled.label`
  margin-top: 32px;
  background-color: var(--cor-neutra-dark-medium);
  border-radius: var(--border-radius-s);
  padding: var(--padding-xs) var(--padding-s);
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-s);
`;

const BarraPesquisa = () => {
  return (
    <StyledLabel htmlFor="search">
      <SearchIcon />
      <CampoTexto
        name="search"
        type="text"
        placeholder="Procure seu dinheiro"
      />
    </StyledLabel>
  );
};

export default BarraPesquisa;

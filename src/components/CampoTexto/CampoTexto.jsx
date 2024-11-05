import styled from "styled-components";

const CampoTexto = styled.input`
  width: 95%;
  padding: var(--padding-xs);
  font-size: var(--fonte-md);
  background-color: var(--cor-neutra-dark-medium);
  border: none;
  border-radius: var(--border-radius-s);
  color: var(--cor-neutra-light);

  &:focus {
    outline: none;
    border-color: var(--cor-neutra-light);
  }
`;

export default CampoTexto;

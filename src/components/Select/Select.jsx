import styled from "styled-components";

export const SelectGroup = styled.select`
  width: 100%;
  padding: var(--padding-xs);
  font-size: var(--fonte-md);
  color: var(--cor-neutra-light);
  background-color: var(--cor-neutra-dark-medium);
  border: none;
  border-radius: 5px;
  appearance: none;
  outline: none;
`;

export const SelectOption = styled.option`
  color: var(--cor-neutra-dark);
  background-color: var(--cor-neutra-light);
  padding: var(--padding-xs);
`;

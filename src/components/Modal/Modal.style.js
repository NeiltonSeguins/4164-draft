import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 245, 245, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const ModalContainer = styled.dialog`
  background-color: var(--cor-neutra-dark);
  border-radius: var(--border-radius-s);
  border: none;
  padding: var(--padding-m);
  width: 400px;
  color: var(--cor-neutra-light);
  position: relative;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: var(--fonte-xl);
  font-weight: 700;

  & > div {
    display: flex;
    align-items: center;
    gap: var(--gap-xs);

    & > svg {
      width: 32px;
      height: 38px;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--cor-neutra-light);
  font-size: var(--fonte-xl);
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-s);
`;

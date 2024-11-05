import React, { useCallback, useEffect, useRef } from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./Modal.style";
import Botao from "@components/Botao";

const Modal = ({ icon, titulo, aoFechar, children, estaAberta, aoClicar }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;

    if (estaAberta) {
      dialogNode.showModal();
    } else {
      dialogNode.close();
    }

    const handleClose = () => aoFechar();

    dialogNode.addEventListener("close", handleClose);

    return () => {
      dialogNode.removeEventListener("close", handleClose);
    };
  }, [estaAberta, aoFechar]);

  return (
    <ModalOverlay>
      <ModalContainer aoFechar={aoFechar} ref={dialogRef}>
        <ModalHeader>
          <div>
            {icon}
            {titulo}
          </div>
          <CloseButton onClick={aoFechar}>x</CloseButton>
        </ModalHeader>
        {children}
        <ButtonGroup>
          <Botao $variante="secundario" onClick={aoFechar}>
            Cancelar
          </Botao>
          <Botao $variante="primario" onClick={aoClicar}>
            Adicionar
          </Botao>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

import { observer } from "mobx-react";
import { useStoreContext } from "src/mobx/store/storeContext";
import styled from "styled-components";

export const Usuario = styled.div`
  grid-area: usuario;
  color: var(--cor-neutra-light);

  & > h1 {
    margin: 16px 0 0 0;
  }

  & > p {
    margin: 8px 0 16px 0;
  }
`;

const SaudacaoUsuario = observer(() => {
  const { usuarioStore } = useStoreContext();
  return (
    <Usuario>
      <h1>Olá, {usuarioStore.nome}</h1>
      <p>Veja como estão suas finanças hoje.</p>
    </Usuario>
  );
});

export default SaudacaoUsuario;

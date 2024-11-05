import styled from "styled-components";
import { Cartao, CartaoCabecalho, Descricao } from "@components/Cartao";
import { CartaoCorpo } from "@components/Cartao";
import { PigIcon } from "@components/Icones";
import BarraProgresso from "@components/MetaFinanceira/BarraProgresso/BarraProgresso";

export const TituloMetaFinanceira = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  font-size: var(--fonte-l);
  color: var(--cor-secundaria-receita);
  margin: 0;
`;

const MetaFinanceira = () => {
  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>
          <TituloMetaFinanceira>
            <PigIcon />
            Economizar
          </TituloMetaFinanceira>
          <BarraProgresso />
        </Descricao>
      </CartaoCorpo>
    </Cartao>
  );
};
export default MetaFinanceira;

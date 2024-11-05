import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--cor-neutra-dark-medium);
  border-radius: var(--border-radius-m);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: var(--cor-neutra-medium);
  border-radius: var(--border-radius-m) 0 0 var(--border-radius-m);
  padding: var(--padding-l);
  max-width: 400px;
  color: var(--cor-neutra-light);
`;

export const Title = styled.h1`
  font-size: var(--fonte-xxl);
  color: var(--cor-neutra-light);
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: var(--fonte-md);
  margin-bottom: 30px;
`;

export const Illustration = styled.img`
  max-width: 500px;
  margin-left: 50px;
`;

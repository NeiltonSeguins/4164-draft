import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;

  --fonte-xxxl: 2.438rem;
  --fonte-xxl: 1.938rem;
  --fonte-xl: 1.562rem;
  --fonte-l: 1.25rem;
  --fonte-md: 1rem;
  --fonte-s: 0.812rem;
  --fonte-xs: 0.625rem;

  --cor-neutra-dark: #212229;
  --cor-neutra-dark-medium: #2a2c34;
  --cor-neutra-medium: #33353f;
  --cor-neutra-light: #f5f5f5;
  --cor-primaria: #7693ff;
  --cor-secundaria-receita: #d6ff62;
  --cor-secundaria-despesa: #f87828;

  --border-radius-s: 0.5rem;
  --border-radius-m: 1rem;
  --border-radius-l: 1.5rem;

  --padding-xs: 0.5rem;
  --padding-s: 1rem;
  --padding-m: 1.5rem;
  --padding-l: 2.5rem;
  --padding-xl: 5rem;

  --gap-xs: 0.5rem;
  --gap-s: 1rem;
  --gap-m: 1.25rem;
  --gap-l: 1.5rem;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: var(--cor-neutra-dark);
}

`;

export default GlobalStyle;

import React, { createContext } from "react";
import { usuarioStore } from "./usuarioStore";
import { transacoesStore } from "./transacoesStore";
import { contasStore } from "./contasStore";

export const StoreContext = createContext({
  usuarioStore,
  transacoesStore,
  contasStore,
});

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ usuarioStore, transacoesStore, contasStore }}>
    {children}
  </StoreContext.Provider>
);

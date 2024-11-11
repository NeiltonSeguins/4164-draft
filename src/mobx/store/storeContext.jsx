import React, { createContext, useContext } from "react";
import { usuarioStore } from "./usuarioStore";
import { transacoesStore } from "./transacoesStore";
import { contasStore } from "./contasStore";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ usuarioStore, transacoesStore, contasStore }}>
    {children}
  </StoreContext.Provider>
);

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("Contexto não encontrado");
  }
  return context;
};

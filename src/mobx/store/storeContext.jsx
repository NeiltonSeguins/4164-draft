import React, { createContext } from "react";
import { userStore } from "./userStore";
import { transactionStore } from "./transacoesStore";
import { contasStore } from "./contasStore";

export const StoreContext = createContext({
  userStore,
  transactionStore,
  contasStore,
});

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ userStore, transactionStore, contasStore }}>
    {children}
  </StoreContext.Provider>
);

import React, { createContext } from "react";
import { userStore } from "./userStore";
import { transactionStore } from "./transacoesStore";

export const StoreContext = createContext({
  userStore,
  transactionStore,
});

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ userStore, transactionStore }}>
    {children}
  </StoreContext.Provider>
);

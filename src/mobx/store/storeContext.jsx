import React, { createContext } from "react";
import { userStore } from "./userStore";

export const StoreContext = createContext({
  userStore,
});

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ userStore }}>
    {children}
  </StoreContext.Provider>
);

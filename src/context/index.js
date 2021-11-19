import { createContext, useContext } from "react";

export const Context = createContext();

export const GlobalContext = () => useContext(Context);

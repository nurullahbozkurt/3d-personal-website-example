import { useSpring } from "@react-spring/core";
import React, { useContext, createContext, PropsWithChildren } from "react";

interface AppContext {
  background: any;
  fill: any;
  set: any;
}
export const AppContext = createContext({} as AppContext);

export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [{ background, fill }, set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );

  return (
    <AppContext.Provider value={{ background, fill, set }}>
      {children}
    </AppContext.Provider>
  );
};

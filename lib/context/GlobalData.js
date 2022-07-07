import { useState, createContext, useContext } from 'react';

export const GlobalContext = createContext();

const GlobalData = ({ children }) => {
  const [user, setUser] = useState({});
  const [globalSession, setGlobalSession] = useState({});
  return (
    <GlobalContext.Provider
      value={{ user, setUser, globalSession, setGlobalSession }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalData;
export const useGlobal = () => useContext(GlobalContext);

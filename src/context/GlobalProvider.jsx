// GlobalProvider.js

import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const useAccount = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const values = {
    account,
    setAccount,
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

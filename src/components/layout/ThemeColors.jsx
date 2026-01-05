import React, { createContext, useContext, useState } from "react";

const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState("#0d47a1");

  return (
    <ThemeColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => useContext(ThemeColorContext);

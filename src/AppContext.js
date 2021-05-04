import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [sender, setSender] = useState(null);
  const [page, setPage] = useState(1);
  return (
    <AppContext.Provider value={{ sender, setSender, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

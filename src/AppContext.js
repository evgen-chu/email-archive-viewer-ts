import React, { createContext, useEffect, useState } from "react";
import { getEmails } from "./jsonStorage";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [sender, setSender] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [page, setPage] = useState(1);
  const [searchResult, setSearchResult] = useState(getEmails());
  return (
    <AppContext.Provider
      value={{
        sender,
        setSender,
        receiver,
        setReceiver,
        page,
        setPage,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

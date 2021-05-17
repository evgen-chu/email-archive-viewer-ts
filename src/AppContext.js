import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [sender, setSender] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [page, setPage] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [chosenEmail, setChosenEmail] = useState(null);
  const [resize, setResize] = useState(false);
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
        searchText,
        setSearchText,
        chosenEmail,
        setChosenEmail,
        resize,
        setResize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

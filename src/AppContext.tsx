import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Dispatch } from "react";

interface IProps {
  children: ReactNode;
}
type Email = {
  from: string;
  date: string;
  to: string;
  cc: string;
  bcc: string;
  subject: string;
  body: string;
};

export type ReactSample = {
  sender: string | null;
  setSender: Dispatch<SetStateAction<string | null>>;
  receiver: string | null;
  setReceiver: Dispatch<SetStateAction<null | string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  searchResult: string[];
  setSearchResult: Dispatch<SetStateAction<string[]>>;
  searchText: string | null;
  setSearchText: Dispatch<SetStateAction<null | string>>;
  chosenEmail: Email | null;
  setChosenEmail: Dispatch<SetStateAction<null | Email>>;
  resize: boolean;
  setResize: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<Partial<ReactSample>>({});
const AppProvider = ({ children }: IProps): JSX.Element => {
  const [sender, setSender] = useState<string | null>(null);
  const [receiver, setReceiver] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string | null>("");
  const [chosenEmail, setChosenEmail] = useState<Email | null>(null);
  const [resize, setResize] = useState(false);

  return (
    <AppContext.Provider
      value={{
        sender: sender,
        setSender: setSender,
        receiver: receiver,
        setReceiver: setReceiver,
        page: page,
        setPage: setPage,
        searchResult: searchResult,
        setSearchResult: setSearchResult,
        searchText: searchText,
        setSearchText: setSearchText,
        chosenEmail: chosenEmail,
        setChosenEmail: setChosenEmail,
        resize: resize,
        setResize: setResize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

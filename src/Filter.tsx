import React, {
  useEffect,
  useState,
  useContext,
  FunctionComponent,
} from "react";
import styled from "styled-components";
import { searchForSender, searchForReceiver } from "./jsonStorage";
import { AppContext } from "./AppContext";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import { ReactSample } from "./AppContext";

interface IProps {
  type: string;
}
const Filter = ({ type }: IProps) => {
  const {
    sender,
    setSender,
    setPage,
    searchResult,
    setSearchResult,
    receiver,
    setReceiver,
    setSearchText,
  } = useContext<Partial<ReactSample>>(AppContext);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestionVisibility, setSuggestionVisibility] =
    useState<boolean>(false);

  useEffect(() => {
    if (searchTerm.length > 0 && type === "sender") {
      let temp = searchForSender(searchTerm);
      setSearchResult && setSearchResult(temp);
    }
    if (searchTerm.length > 0 && type === "receiver") {
      let temp = searchForReceiver(searchTerm);
      setSearchResult && setSearchResult(temp);
    }
  }, [searchTerm]);
  const handleDelete = () => {
    if (type === "sender") {
      setSender && setSender(null);
    }
    if (type === "receiver") {
      setReceiver && setReceiver(null);
    }
    setPage && setPage(1);
  };
  return (
    <Wrapper>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">
          {type === "sender"
            ? "Sender"
            : type === "receiver"
            ? "Receiver"
            : "Search"}
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (type === "text-search")
              setSearchText && setSearchText(e.target.value);
            setSuggestionVisibility(true);
          }}
          label="Sender"
        />
      </FormControl>
      {((sender && type === "sender") || (receiver && type === "receiver")) && (
        <Chip
          variant="outlined"
          size="small"
          label={type === "sender" ? sender : receiver}
          onDelete={handleDelete}
          color="primary"
        />
      )}
      {searchResult && searchResult.length > 0 && type !== "text-search" && (
        //TODO: add prop suggestionVisibility
        // <Suggestions suggestionVisibility={suggestionVisibility}>
        <Suggestions>
          <ul>
            {searchResult.map((item) => {
              return (
                <li
                  onClick={(e) => {
                    setSearchTerm("");
                    setSuggestionVisibility(false);
                    if (type === "sender") setSender && setSender(item);
                    if (type === "receiver") setReceiver && setReceiver(item);
                    setPage && setPage(1);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </Suggestions>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

// type SuggestionVisibilityProps = {
//   suggestionVisibility: boolean;
// };
// const Suggestions: FunctionComponent<SuggestionVisibilityProps> = ({
//   suggestionVisibility,
// }) => {
//   const filterStyle: React.CSSProperties = {
//     backgroundColor: "#fff",
//     visibility: "visible",
//     position: "absolute",
//     zIndex: 5,
//     top: "20px",
//     left: "-20px",
//   };
//   return <div style={filterStyle}>Hello!</div>;
// };
const Suggestions = styled.div`
  background-color: #fff;

  visibility: visible;
  position: absolute;
  z-index: 5;
  top: 20px;
  left: -20px;
`;
// visibility: ${suggestionVisibility ? "visible" : "hidden"}
{
  /* <div>{suggestionVisibility}</div> */
}

// visibility: ${(props:any) =>
// props.suggestionsVisibility ? "visible" : "hidden"};

export default Filter;

import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { searchForSender, searchForReceiver } from "./jsonStorage";
import { AppContext } from "./AppContext";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";

const Filter = (type) => {
  const {
    sender,
    setSender,
    setPage,
    searchResult,
    setSearchResult,
    receiver,
    setReceiver,
    setSearchText,
  } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestionsVisibility, setSuggestionsVisibility] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0 && type === "sender") {
      let temp = searchForSender(searchTerm);
      setSearchResult(temp);
    }
    if (searchTerm.length > 0 && type === "receiver") {
      let temp = searchForReceiver(searchTerm);
      setSearchResult(temp);
    }
  }, [searchTerm]);
  const handleDelete = () => {
    if (type === "sender") setSender(null);
    if (type === "receiver") setReceiver(null);
    setPage(1);
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
            if (type === "text-search") setSearchText(e.target.value);
            setSuggestionsVisibility(true);
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
      {searchResult.length > 0 && type !== "text-search" && (
        <Suggestions suggestionsVisibility={suggestionsVisibility}>
          <ul>
            {searchResult.map((item) => {
              return (
                <li
                  onClick={(e) => {
                    setSearchTerm("");
                    setSuggestionsVisibility(false);
                    if (type === "sender") setSender(item);
                    if (type === "receiver") setReceiver(item);
                    setPage(1);
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
const Suggestions = styled.div`
  background-color: #fff;
  visibility: ${(props) =>
    props.suggestionsVisibility ? "visible" : "hidden"};
  position: absolute;
  z-index: 5;
  top: 20px;
  left: -20px;
`;

export default Filter;

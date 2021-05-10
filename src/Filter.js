import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { searchForSender, searchForReceiver } from "./jsonStorage";
import { AppContext } from "./AppContext";

const Filter = ({ type }) => {
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
  // let isSender = type === "sender";

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
  return (
    <Wrapper>
      <input
        type="text"
        placeholder={
          type === "sender"
            ? "sender"
            : type === "receiver"
            ? "receiver"
            : "search"
        }
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (type === "text-search") setSearchText(e.target.value);
          setSuggestionsVisibility(true);
        }}
      />
      {((sender && type === "sender") || (receiver && type === "receiver")) && (
        <SenderWrapper>
          <Sender>{type === "sender" ? sender : receiver}</Sender>
          <button
            onClick={(e) => {
              if (type === "sender") setSender(null);
              if (type === "receiver") setReceiver(null);
              setPage(1);
            }}
          >
            X
          </button>
        </SenderWrapper>
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
  input {
    height: 25px;
    border-radius: 4px;
  }
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
const Sender = styled.div`
  border: 1px solid green;
  border-radius: 5px;
`;
const SenderWrapper = styled.div`
  display: flex;
`;

export default Filter;

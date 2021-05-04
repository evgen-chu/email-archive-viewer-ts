import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { searchForSender } from "./jsonStorage";
import { AppContext } from "./AppContext";

const FilterBySender = () => {
  const { sender, setSender, setPage } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [suggestionsVisibility, setSuggestionsVisibility] = useState(false);
  //const [sender, setSender] = useState(null);
  useEffect(() => {
    if (searchTerm.length > 0) {
      let temp = searchForSender(searchTerm);
      setSearchResult(temp);
    }
  }, [searchTerm]);
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="sender"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setSuggestionsVisibility(true);
        }}
      />
      {sender && (
        <SenderWrapper>
          <Sender>{sender}</Sender>
          <button
            onClick={(e) => {
              setSender(null);
              setPage(1);
            }}
          >
            X
          </button>
        </SenderWrapper>
      )}
      {searchResult.length > 0 && (
        <Suggestions suggestionsVisibility={suggestionsVisibility}>
          <ul>
            {searchResult.map((item) => {
              return (
                <li
                  onClick={(e) => {
                    setSearchTerm("");
                    setSuggestionsVisibility(false);
                    setSender(item);
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
const Sender = styled.div`
  border: 1px solid green;
  border-radius: 5px;
`;
const SenderWrapper = styled.div`
  display: flex;
`;

export default FilterBySender;

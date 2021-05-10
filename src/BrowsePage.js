import React, { useState, useEffect, useContext } from "react";
import EmailGrid from "./EmailGrid";
import { getEmails, getAllSenders } from "./jsonStorage";
import ActionBar from "./ActionBar";
import PageButtons from "./PageButtons";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import Email from "./Email";

const BrowsePage = () => {
  const {
    sender,
    setSender,
    page,
    receiver,
    searchText,
    chosenEmail,
    setChosenEmail,
    resize,
  } = useContext(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getEmails(page, 20, sender, receiver, searchText));
  }, [page, sender, receiver, searchText, chosenEmail]);

  return (
    <Wrapper resize={false}>
      <div>
        <ActionBar sender={sender} setSenders={setSender} />
        {items && <EmailGrid items={items} />}
        <PageButtons />
      </div>
      {chosenEmail && <Email />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  //width: ${(props) => (props.resize ? "50vw" : "100vw")};
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
`;

export default BrowsePage;

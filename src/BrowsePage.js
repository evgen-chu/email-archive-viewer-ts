import React, { useState, useEffect, useContext } from "react";
import EmailGrid from "./EmailGrid";
import { getPaginatedEmails, getAllSenders } from "./jsonStorage";
import ActionBar from "./ActionBar";
import PageButtons from "./PageButtons";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import Email from "./Email";
import Divider from "@material-ui/core/Divider";

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
    setItems(getPaginatedEmails(page, 10, sender, receiver, searchText));
  }, [page, sender, receiver, searchText, chosenEmail]);

  return (
    <Wrapper resize={false}>
      <ActionBar sender={sender} setSenders={setSender} />
      <Divider variant="middle" />
      <EmailWrapper>
        <div>
          {items && <EmailGrid items={items} />}
          <PageButtons />
        </div>
        {chosenEmail && <Email />}
      </EmailWrapper>
      <Divider variant="middle" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  //width: ${(props) => (props.resize ? "50vw" : "100vw")};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const EmailWrapper = styled.div`
  display: flex;
`;

export default BrowsePage;

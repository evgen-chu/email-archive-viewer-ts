import React, { useState, useEffect, useContext } from "react";
import EmailGrid from "./EmailGrid";
import { getEmails, getAllSenders } from "./jsonStorage";
import ActionBar from "./ActionBar";
import PageButtons from "./PageButtons";
import { AppContext } from "./AppContext";
import styled from "styled-components";

const BrowsePage = () => {
  const { sender, setSender, page, receiver } = useContext(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getEmails(page, 20, sender, receiver));
  }, [page, sender, receiver]);

  return (
    <Wrapper>
      <ActionBar sender={sender} setSenders={setSender} />
      {items && <EmailGrid items={items} />}
      <PageButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export default BrowsePage;

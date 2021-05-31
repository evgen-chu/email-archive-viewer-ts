import React, { useState, useEffect, useContext } from "react";
import EmailGrid from "./EmailGrid";
import { getPaginatedEmails, getAllSenders } from "./jsonStorage";
import ActionBar from "./ActionBar";
import PageButtons from "./PageButtons";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import Email from "./Email";
import Divider from "@material-ui/core/Divider";
import { ReactSample } from "./AppContext";

const BrowsePage = () => {
  const { sender, page, receiver, searchText, chosenEmail } =
    useContext<Partial<ReactSample>>(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      getPaginatedEmails(
        page ? page : 1,
        10,
        sender ? sender : "",
        receiver ? receiver : "",
        searchText ? searchText : ""
      )
    );
  }, [page, sender, receiver, searchText, chosenEmail]);

  return (
    <Wrapper>
      <ActionBar />
      <Divider variant="middle" />
      <EmailWrapper>
        <div>
          {items && <EmailGrid items={items} />}
          <PageButtons />
        </div>
        <Divider orientation="vertical" flexItem />
        {chosenEmail && <Email />}
      </EmailWrapper>
      <Divider variant="middle" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
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

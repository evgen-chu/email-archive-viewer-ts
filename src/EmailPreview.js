import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { AppContext } from "./AppContext";

const EmailPreview = ({ item }) => {
  const { searchText } = useContext(AppContext);
  //   const highlight = (text, word) => {
  //     item.body.replace(word, `<span>${word}</span>`);
  //   };

  return (
    <Wrapper>
      <div>{item.from}</div>
      <div id="email-body">{item.body.slice(0, 100)}</div>
      <div> {moment(item.date).format("LL")}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
export default EmailPreview;

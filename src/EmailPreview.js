import React from "react";
import styled from "styled-components";
import moment from "moment";

const EmailPreview = ({ item }) => {
  return (
    <Wrapper>
      <div>{item.from}</div>
      <div>{item.body.slice(0, 100)} </div>
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

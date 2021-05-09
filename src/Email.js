import React from "react";
import { useParams } from "react-router";
import { getEmailById } from "./jsonStorage";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Email = () => {
  const { emailId } = useParams();
  const item = getEmailById(emailId);
  return (
    <Wrapper>
      <Link to="/">Back to archive</Link>
      <div>From: {item.from}</div>
      <div> {item.date}</div>
      <div>To: {item.to}</div>
      <div>CC: {item.cc}</div>
      <div>BCC: {item.bcc}</div>
      <div>Subject: {item.subject}</div>
      <div>{item.body} </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export default Email;

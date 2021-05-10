import React, { useContext } from "react";
import { useParams } from "react-router";
import { getEmailById } from "./jsonStorage";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { VscChromeClose } from "react-icons/vsc";

const Email = () => {
  const { chosenEmail, setChosenEmail, setResize } = useContext(AppContext);
  // const { emailId } = useParams();
  //const item = getEmailById(emailId);
  return (
    <Wrapper alignLeft={chosenEmail === null}>
      {/* <Link to="/">Back to archive</Link> */}
      <ExitButton
        onClick={(e) => {
          setChosenEmail(null);
          setResize(false);
        }}
      >
        <VscChromeClose />
      </ExitButton>
      <div>From: {chosenEmail.from}</div>
      <div> {chosenEmail.date}</div>
      <div>To: {chosenEmail.to}</div>
      <div>CC: {chosenEmail.cc}</div>
      <div>BCC: {chosenEmail.bcc}</div>
      <div>Subject: {chosenEmail.subject}</div>
      <div>{chosenEmail.body} </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  height: 100vh;
  margin: auto;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
`;
const ExitButton = styled.button`
  background-color: white;
  width: 30px;
  position: absolute;
  top: 2%;
  left: 93%;
  border-radius: 5px;
  border: none;
  &:hover {
    border: 1px gray solid;
  }
`;

export default Email;

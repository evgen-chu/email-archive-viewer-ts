import React, { useContext } from "react";
import { useParams } from "react-router";
import { getEmailById } from "./jsonStorage";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { VscChromeClose } from "react-icons/vsc";
import { applyHighlight } from "./EmailPreview";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
//import ThemeProvider from "@material-ui/core/ThemeProvider";
import moment from "moment";

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
});
const Email = () => {
  const { chosenEmail, setChosenEmail, setResize, searchText } =
    useContext(AppContext);

  return (
    <Wrapper alignLeft={chosenEmail === null}>
      <ExitButton
        onClick={(e) => {
          setChosenEmail(null);
          setResize(false);
        }}
      >
        <VscChromeClose />
      </ExitButton>
      <ThemeProvider theme={theme}>
        <Typography component="span" variant="body1" color="textPrimary">
          From: {chosenEmail.from}
          {moment(chosenEmail.date).format("LL")}
          <div>To: {chosenEmail.to}</div>
          {chosenEmail.cc.length > 0 && <div>CC: {chosenEmail.cc}</div>}
          {chosenEmail.bcc.length > 0 && <div>BCC: {chosenEmail.bcc}</div>}
          Subject: {chosenEmail.subject}
          <div
            dangerouslySetInnerHTML={{
              __html: applyHighlight(searchText, chosenEmail.body),
            }}
          ></div>
        </Typography>
      </ThemeProvider>
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
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
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

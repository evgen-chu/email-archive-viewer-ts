import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { VscChromeClose } from "react-icons/vsc";
import { applyHighlight } from "./EmailPreview";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import moment from "moment";
import { ReactSample } from "./AppContext";

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
});
const Email = () => {
  const { chosenEmail, setChosenEmail, setResize, searchText } =
    useContext<Partial<ReactSample>>(AppContext);

  return (
    <Wrapper>
      <ExitButton
        onClick={(e) => {
          setChosenEmail && setChosenEmail(null);
          setResize && setResize(false);
        }}
      >
        <VscChromeClose />
      </ExitButton>
      <ThemeProvider theme={theme}>
        <Typography component="span" variant="body1" color="textPrimary">
          From: {chosenEmail && chosenEmail.from}
          {moment(chosenEmail && chosenEmail.date).format("LL")}
          <div>To: {chosenEmail && chosenEmail.to}</div>
          {chosenEmail && chosenEmail.cc.length > 0 && (
            <div>CC: {chosenEmail.cc}</div>
          )}
          {chosenEmail && chosenEmail.bcc.length > 0 && (
            <div>BCC: {chosenEmail && chosenEmail.bcc}</div>
          )}
          Subject: {chosenEmail && chosenEmail.subject}
          <div
            dangerouslySetInnerHTML={{
              __html: applyHighlight(
                searchText ? searchText : "",
                chosenEmail ? chosenEmail.body : ""
              ),
            }}
          ></div>
        </Typography>
      </ThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  width: 40vw;
  height: 60vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;

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

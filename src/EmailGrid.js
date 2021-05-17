import React, { useContext } from "react";
import EmailPreview from "./EmailPreview";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "./AppContext";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const EmailGrid = ({ items }) => {
  const { resize } = useContext(AppContext);
  return (
    <List style={{ width: resize ? "60vw" : "100vw" }}>
      {items.map((item) => {
        return (
          <>
            <EmailPreview key={uuidv4()} item={item} />{" "}
            <Divider variant="middle" />
          </>
        );
      })}
    </List>
  );
};

const Wrapper = styled.div`
  //width: 100%;
  width: ${(props) => (props.resize ? "50vw" : "100vw")};
  position: relative;
  z-index: 1;
  margin-top: 40px;
  border-top: 1px solid black;
`;

export default EmailGrid;

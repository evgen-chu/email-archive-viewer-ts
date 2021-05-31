import React, { useContext } from "react";
import EmailPreview from "./EmailPreview";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "./AppContext";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const EmailGrid = ({ items }: any) => {
  return (
    <List>
      {items.map((item: any) => {
        return (
          <div>
            <EmailPreview key={uuidv4()} item={item} /> <Divider />
          </div>
        );
      })}
    </List>
  );
};
const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 40px;
  border-top: 1px solid black;
`;

export default EmailGrid;

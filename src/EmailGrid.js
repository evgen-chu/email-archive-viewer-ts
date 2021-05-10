import React, { useContext } from "react";
import EmailPreview from "./EmailPreview";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "./AppContext";

const EmailGrid = ({ items }) => {
  const { resize } = useContext(AppContext);
  return (
    <Wrapper style={{ width: resize ? "60vw" : "100vw" }}>
      {items.map((item) => {
        return <EmailPreview key={uuidv4()} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //width: 100%;
  width: ${(props) => (props.resize ? "50vw" : "100vw")};
  position: relative;
  z-index: 1;
  margin-top: 40px;
`;

export default EmailGrid;

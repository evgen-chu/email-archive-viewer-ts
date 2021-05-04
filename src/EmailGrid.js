import React from "react";
import EmailPreview from "./EmailPreview";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const EmailGrid = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <EmailPreview key={uuidv4()} item={item} />;
      })}
    </div>
  );
};

export default EmailGrid;

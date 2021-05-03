import React from "react";
import EmailPreview from "./EmailPreview";
import styled from "styled-components";

const EmailGrid = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <EmailPreview item={item} />;
      })}
    </div>
  );
};

export default EmailGrid;

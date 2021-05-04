import React from "react";
import styled from "styled-components";
import { getAllSenders } from "./jsonStorage";
import FilterBySender from "./FilterBySender";

const ActionBar = ({ sender, setSender }) => {
  return (
    <Wrapper>
      <div>
        <label>Filter by Sender:</label>
        {/* <input type="text" /> */}
        <FilterBySender sender={sender} setSender={setSender} />
      </div>
      <div>
        <label>Filter by Receiver:</label>
        <input type="text" />
      </div>

      <input type="text" placeholder="Search" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  div {
    display: flex;
  }
  input {
    height: 20px;
  }
`;

export default ActionBar;

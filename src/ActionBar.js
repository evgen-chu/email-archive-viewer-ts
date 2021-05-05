import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const ActionBar = () => {
  return (
    <Wrapper>
      <div>
        <label>Filter by Sender:</label>
        <Filter type="sender" />
      </div>
      <div>
        <label>Filter by Receiver:</label>
        <Filter type="receiver" />
      </div>

      <Filter type="text-search" />
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

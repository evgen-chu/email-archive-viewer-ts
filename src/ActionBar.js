import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const ActionBar = () => {
  return (
    <Wrapper>
      <div>
        <label>Sender:</label>
        <Filter type="sender" />
      </div>
      <div>
        <label>Receiver:</label>
        <Filter type="receiver" />
      </div>

      <Filter type="text-search" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  div {
    display: flex;
  }
  input {
    height: 20px;
  }
  label {
    margin: auto;
    margin-right: 10px;
  }
`;

export default ActionBar;

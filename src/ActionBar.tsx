import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const ActionBar = () => {
  return (
    <Wrapper>
      <div>
        <Filter type="sender" />
      </div>
      <div>
        <Filter type="receiver" />
      </div>

      <Filter type="text-search" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
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
  z-index: 3;
`;

export default ActionBar;

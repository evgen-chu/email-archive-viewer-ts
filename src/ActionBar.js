import React from "react";
import styled from "styled-components";

const ActionBar = () => {
  return (
    <Wrapper>
      <div>
        <label>Filter by Sender:</label>
        <input type="text" />
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
`;

export default ActionBar;

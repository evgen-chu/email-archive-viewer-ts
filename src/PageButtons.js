import React from "react";
import styled from "styled-components";
const PageButtons = ({ page, setPage }) => {
  return (
    <Wrapper>
      <button className="previous-page">&lt;</button>
      <div>{page}</div>
      <button className="next-page">&gt;</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default PageButtons;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getEmails } from "./jsonStorage";
const PageButtons = ({ page, setPage }) => {
  const [nextPage, setNextPage] = useState(true);
  useEffect(() => {
    let items = getEmails(page + 1, 20);
    items.length === 0 ? setNextPage(false) : setNextPage(true);
  }, [page]);
  return (
    <Wrapper>
      <button
        className="previous-page"
        onClick={(e) => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        &lt;
      </button>
      <div>{page}</div>
      <button
        className="next-page"
        onClick={(e) => {
          setPage(page + 1);
        }}
        disabled={!nextPage}
      >
        &gt;
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default PageButtons;

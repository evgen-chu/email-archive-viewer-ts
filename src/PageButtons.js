import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getEmails } from "./jsonStorage";
import { AppContext } from "./AppContext";
const PageButtons = () => {
  const { page, setPage, sender, receiver, searchText } = useContext(
    AppContext
  );
  const [nextPage, setNextPage] = useState(true);
  useEffect(() => {
    let items = getEmails(page + 1, 20, sender, receiver, searchText);
    items.length === 0 ? setNextPage(false) : setNextPage(true);
  }, [page, sender, receiver]);
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

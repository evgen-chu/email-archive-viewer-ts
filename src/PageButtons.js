import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getPaginatedEmails, getEmailsLength } from "./jsonStorage";
import { AppContext } from "./AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const PageButtons = () => {
  const classes = useStyles();
  const { page, setPage, sender, receiver, searchText } =
    useContext(AppContext);
  const [nextPage, setNextPage] = useState(true);
  useEffect(() => {
    let items = getPaginatedEmails(page + 1, 20, sender, receiver, searchText);
    items.length === 0 ? setNextPage(false) : setNextPage(true);
  }, [page, sender, receiver]);
  const handleChange = (e, value) => {
    console.log(value);
    setPage(value);
  };
  return (
    <Wrapper className={classes.root}>
      {/* <button
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
      </button> */}
      <Pagination
        count={Math.round(getEmailsLength(sender, receiver, searchText) / 10)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default PageButtons;

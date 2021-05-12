import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { AppContext } from "./AppContext";

import ListItem from "@material-ui/core/ListItem";

import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const EmailPreview = ({ item }) => {
  const classes = useStyles();
  const {
    searchText,
    chosenEmail,
    setChosenEmail,
    resize,
    setResize,
  } = useContext(AppContext);
  const itemSplit =
    searchText !== ""
      ? item.body.slice(0, 150).split(searchText)
      : item.body.slice(0, 150);

  return (
    <ListItemMoved
      alignItems="flex-start"
      resize={false}
      style={{ width: resize ? "60vw" : "100vw" }}
      onClick={(e) => {
        setChosenEmail(item);
        setResize(true);
      }}
    >
      {/* <div className="name">{item.from.split("@")[0]}</div>
      <div id="email-body">
        {Array.isArray(itemSplit) ? (
          itemSplit.map((item, index) => {
            if (index === itemSplit.length - 1) return <span>{item}</span>;
            else
              return (
                <span>
                  {item}
                  <SearchTerm>{searchText}</SearchTerm>
                </span>
              );
          })
        ) : (
          <span>{itemSplit}</span>
        )}
      </div>
      <div> {moment(item.date).format("LL")}</div> */}

      <ListItemText
        primary={item.from.split("@")[0]}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {item.subject}
            </Typography>
            {Array.isArray(itemSplit) ? (
              itemSplit.map((item, index) => {
                if (index === itemSplit.length - 1) return <span>{item}</span>;
                else
                  return (
                    <span>
                      {item}
                      <SearchTerm>{searchText}</SearchTerm>
                    </span>
                  );
              })
            ) : (
              <span>{itemSplit}</span>
            )}
          </React.Fragment>
        }
      />
    </ListItemMoved>
  );
};

const Wrapper = styled.button`
  //width: 100vw;
  width: ${(props) => (props.resize ? "50vw" : "100vw")};
  margin: auto;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  height: 40px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 12pt;
  background-color: #f8f9fa;
  border: none;
  .name {
    margin-right: 40px;
  }
  &:hover {
    background-color: #dee2e6;
  }
`;
const SearchTerm = styled.span`
  font-weight: bold;
  background-color: yellow;
`;

const ListItemMoved = styled(ListItem)`
  margin-left: 50px;
`;
export default EmailPreview;

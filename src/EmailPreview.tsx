import React, { useContext, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { AppContext } from "./AppContext";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { highlight } from "./jsonStorage";

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

export const applyHighlight = (term: string, text: string) => {
  let indices = highlight(term, text);
  console.log(indices);
  let tagsLength = 0;
  let counter = 0;
  while (counter < indices.length) {
    text =
      text.slice(0, indices[counter].start + tagsLength) +
      "<strong>" +
      text.slice(
        indices[counter].start + tagsLength,
        indices[counter].end + tagsLength + 1
      ) +
      "</strong>" +
      text.slice(indices[counter].end + tagsLength + 1, text.length);
    tagsLength += 17;
    console.log(text);
    counter++;
  }
  return text;
};

const EmailPreview = ({ item }: any) => {
  const classes = useStyles();
  const { searchText, chosenEmail, setChosenEmail, resize, setResize } =
    useContext(AppContext);

  return (
    <ListItemMoved
      alignItems="flex-start"
      style={{ width: resize ? "60vw" : "100vw" }}
      onClick={(e) => {
        setChosenEmail && setChosenEmail(item);
        setResize && setResize(true);
      }}
      button={true}
    >
      <ListItemText
        primary={item.from.split("@")[0]}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body1"
              className={classes.inline}
              color="textPrimary"
            >
              {item.subject}
            </Typography>

            <div
              dangerouslySetInnerHTML={{
                __html: applyHighlight(
                  searchText ? searchText : "",
                  item.body.slice(0, 140)
                ),
              }}
            ></div>
            <Typography
              component="span"
              variant="body1"
              className={classes.inline}
              color="textPrimary"
            >
              {moment(item.date).format("LL")}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItemMoved>
  );
};

const SearchTerm = styled.span`
  font-weight: bold;
  background-color: yellow;
`;

const ListItemMoved = styled(ListItem)`
  margin-left: 50px;
`;
export default EmailPreview;

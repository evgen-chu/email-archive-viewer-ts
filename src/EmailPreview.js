import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { AppContext } from "./AppContext";

const EmailPreview = ({ item }) => {
  const { searchText } = useContext(AppContext);
  const itemSplit = item.body.slice(0, 100).split(searchText);
  return (
    <Wrapper>
      <div>{item.from}</div>
      <div id="email-body">
        {itemSplit.length > 1 ? (
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
          <span>{itemSplit[0]}</span>
        )}
      </div>
      <div> {moment(item.date).format("LL")}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const SearchTerm = styled.span`
  font-weight: bold;
`;
export default EmailPreview;

import React from "react";
import EmailGrid from "./EmailGrid";
import { getEmails } from "./jsonStorage";

const BrowsePage = () => {
  let items = getEmails(1, 10);
  return (
    <div>
      <EmailGrid items={items} />
    </div>
  );
};

export default BrowsePage;

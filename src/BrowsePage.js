import React, { useState } from "react";
import EmailGrid from "./EmailGrid";
import { getEmails } from "./jsonStorage";
import ActionBar from "./ActionBar";
import PageButtons from "./PageButtons";

const BrowsePage = () => {
  const [page, setPage] = useState(1);
  let items = getEmails(1, 10);
  return (
    <div>
      <ActionBar />
      <EmailGrid items={items} />
      <PageButtons page={page} setPage={setPage} />
    </div>
  );
};

export default BrowsePage;

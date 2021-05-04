import React, { useState, useEffect } from "react";
import EmailGrid from "./EmailGrid";
import { getEmails } from "./jsonStorage";
import ActionBar from "./ActionBar";
import PageButtons from "./PageButtons";

const BrowsePage = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getEmails(page, 20));
  }, [page]);

  return (
    <div>
      <ActionBar />
      {items && <EmailGrid items={items} />}
      <PageButtons page={page} setPage={setPage} />
    </div>
  );
};

export default BrowsePage;

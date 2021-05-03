const emails = require("../email.json");

//get paginated result
const getEmails = (page, limit) => {
  const startInd = (page - 1) * limit;
  const endInd = limit;
  console.log(emails.slice(startInd, endInd));
  return emails.slice(startInd, endInd);
};

//getEmails(1, 2);

const emails = require("./assets/email.json");

//get paginated result
export const getEmails = (page, limit) => {
  const startInd = (page - 1) * limit;
  const endInd = limit;
  let result = emails.slice(startInd, endInd);
  console.log(result[0].from);
  return result;
};

//getEmails(1, 2);

const getEmailsBySender = (user) => {
  let result = emails.filter((item) => {
    return item.from === user;
  });
  console.log(result);
  return result;
};

//getEmailsBySender("phillip.allen@enron.com");

const getEmailsByReceiver = (user) => {
  let result = emails.filter((item) => {
    return item.to === user;
  });
  console.log(result);
  return result;
};

const search = (searchTerm) => {
  let result = emails.filter((item) => {
    return item.subject.includes(searchTerm) || item.body.includes(searchTerm);
  });
  console.log(result);
  return result;
};

//search("analyst");

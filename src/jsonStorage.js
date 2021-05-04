const emails = require("./assets/email.json");

//get paginated result
export const getEmails = (page, limit, sender) => {
  let temp;
  if (sender) {
    temp = emails.filter((item) => item.from === sender);
  } else temp = emails;

  const startInd = (page - 1) * limit;
  const endInd = page * limit - 1;
  let result = temp.slice(startInd, endInd);
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

export const search = (searchTerm) => {
  let result = emails.filter((item) => {
    return item.subject.includes(searchTerm) || item.body.includes(searchTerm);
  });
  //console.log(result);
  return result;
};

//search("analyst");

export const getAllSenders = () => {
  let senders = [...new Set(emails.map((item) => item.from))];
  return senders;
};

//getAllSenders();

export const searchForSender = (searchTerm) => {
  let senders = [...new Set(emails.map((item) => item.from))];
  let result = senders.filter((item) => {
    return item.includes(searchTerm);
  });
  return result;
};

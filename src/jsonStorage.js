const emails = require("./assets/email.json");

//get paginated result
export const getEmails = (page, limit, sender, receiver) => {
  let result;
  if (sender) {
    let temp = emails.filter((item) => item.from === sender);
    result = temp;
  } else result = emails;

  if (receiver) {
    console.log(receiver);
    let temp = result.filter((item) => {
      return item.to.includes(receiver);
    });
    result = temp;
  }
  const startInd = (page - 1) * limit;
  const endInd = page * limit - 1;
  let paginatedResult = result.slice(startInd, endInd);
  return paginatedResult;
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

export const searchForReceiver = (searchTerm) => {
  let receiversSet = new Set();
  emails.forEach((item) => {
    item.to.forEach((itemTo) => {
      receiversSet.add(itemTo);
    });
  });
  console.log("ReceiversSet: ", receiversSet);
  let receivers = [...receiversSet];
  let result = receivers.filter((item) => {
    return item.includes(searchTerm);
  });
  return result;
};

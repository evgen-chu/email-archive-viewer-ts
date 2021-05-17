//const emails = require("./assets/email.json");
const emails = require("./assets/emailWithID.json");
//get paginated result
export const getEmailById = (id) => {
  return emails.filter((item) => item.id === id)[0];
};
export const getEmails = (sender, receiver, searchText) => {
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
  if (searchText.length > 2) {
    let temp = search(result, searchText);
    result = temp;
  }
  return result;
};

export const getPaginatedEmails = (
  page,
  limit,
  sender,
  receiver,
  searchText
) => {
  let result = getEmails(sender, receiver, searchText);
  const startInd = (page - 1) * limit;
  const endInd = page * limit - 1;
  let paginatedResult = result.slice(startInd, endInd);
  return paginatedResult;
};

export const getEmailsLength = (sender, receiver, searchText) => {
  let result = getEmails(sender, receiver, searchText);
  return result.length;
};

export const search = (array, searchTerm) => {
  let result = array.filter((item) => {
    return item.subject.includes(searchTerm) || item.body.includes(searchTerm);
  });
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

export const highlight = (searchStr, str) => {
  let searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0,
    index,
    indices = [];
  str = str.toLowerCase();
  searchStr = searchStr.toLowerCase();

  while (str.indexOf(searchStr, startIndex) > -1) {
    index = str.indexOf(searchStr, startIndex);
    indices.push({ start: index, end: index + searchStrLen - 1 });
    startIndex = index + searchStrLen;
  }
  return indices;
};

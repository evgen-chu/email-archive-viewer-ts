//const emails = require("./assets/email.json");
const emails: any = require("./assets/emailWithID.json");
//get paginated result
export const getEmailById = (id: number) => {
  return emails.filter((item: any) => item.id === id)[0];
};
export const getEmails = (
  sender?: string,
  receiver?: string,
  searchText?: string
) => {
  let result;
  if (sender) {
    let temp = emails.filter((item: any) => item.from === sender);
    result = temp;
  } else result = emails;

  if (receiver) {
    console.log(receiver);
    let temp = result.filter((item: any) => {
      return item.to.includes(receiver);
    });
    result = temp;
  }
  if (searchText && searchText.length > 2) {
    let temp = search(result, searchText);
    result = temp;
  }
  return result;
};

export const getPaginatedEmails = (
  page: number,
  limit: number,
  sender?: string,
  receiver?: string,
  searchText?: string
) => {
  let result = getEmails(sender, receiver, searchText);
  const startInd = (page - 1) * limit;
  const endInd = page * limit - 1;
  let paginatedResult = result.slice(startInd, endInd);
  return paginatedResult;
};

export const getEmailsLength = (
  sender?: string,
  receiver?: string,
  searchText?: string
) => {
  let result = getEmails(sender, receiver, searchText);
  return result.length;
};

export const search = (array: any, searchTerm?: string) => {
  let result = array.filter((item: any) => {
    return item.subject.includes(searchTerm) || item.body.includes(searchTerm);
  });
  return result;
};

//search("analyst");

export const getAllSenders = () => {
  let senders = new Set(emails.map((item: any) => item.from));
  return senders;
};

//getAllSenders();

export const searchForSender = (searchTerm: string): string =>
  emails
    .map((item: any) => item.from)
    .filter((item: any) => item.includes(searchTerm));

export const searchForReceiver = (searchTerm: string) => {
  let receiversSet = new Set<any>();
  emails.forEach((item: any) => {
    item.to.forEach((itemTo: any) => {
      receiversSet.add(itemTo);
    });
  });
  console.log("ReceiversSet: ", receiversSet);
  let result = Array.from(receiversSet).filter((item) => {
    return item.includes(searchTerm);
  });
  return result;
};

export const highlight = (searchStr: string, str: string) => {
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

const emails = require("./assets/email.json");
var fs = require("fs");
const { v4 } = require("uuid");

const createEmailsId = () => {
  let obj = {
    table: [],
  };
  emails.forEach((item) => {
    obj.table.push({ ...item, id: v4() });
  });
  let json = JSON.stringify(obj);
  fs.writeFile("emailWithID.json", json, "utf8", function (err) {
    if (err) throw err;
    console.log("complete");
  });
};

//createEmailsId();

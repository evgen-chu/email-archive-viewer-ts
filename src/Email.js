import React from "react";

const Email = ({ item }) => {
  return (
    <div>
      <div>From: {item.from}</div>
      <div> {item.date}</div>
      <div>To: {item.to}</div>
      <div>CC: {item.cc}</div>
      <div>BCC: {item.bcc}</div>
      <div>Subject: {item.subject}</div>
      <div>{item.body} </div>
    </div>
  );
};

export default Email;

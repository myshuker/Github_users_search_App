import React from "react";
import context from "../context";

function FetchUsers(inputValue) {
  const URL = `https://api.github.com/search/users?q=${inputValue}`;
  return fetch(URL).then((res) => res.json());
}

export default FetchUsers;

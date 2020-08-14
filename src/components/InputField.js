import React from "react";
import context from "../context";

function InputField() {
  const { handelUserSearch } = React.useContext(context);

  return (
    <input
      type="text"
      id=" "
      placeholder="search for user"
      onChange={handelUserSearch}
    />
  );
}

export default InputField;

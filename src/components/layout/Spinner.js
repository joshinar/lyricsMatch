import React from "react";
import spinner from "./spinner.gif";
export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading..."
        style={{ width: "100px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
};

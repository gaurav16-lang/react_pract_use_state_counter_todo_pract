import React from "react";

function Taskitem(props) {
  console.log(props);
  return <div>{props.title}</div>;
}

export default Taskitem;

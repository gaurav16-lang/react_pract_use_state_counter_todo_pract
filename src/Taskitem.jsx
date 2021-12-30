import React from "react";

function Taskitem({ title, color }) {
  console.log(title);
  return <div style={{ color }}>{title}</div>;
}

export default Taskitem;

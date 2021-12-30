import React, { useState } from "react";

function Task() {
  const [count, setcount] = useState(0);

  function incCounter(value) {
    setcount(count + value);
  }

  return (
    <>
      <h1>gaurav</h1>
      <h2>{count}</h2>
      <button onClick={() => incCounter(+1)}>incrementbyone</button>
      <button onClick={() => incCounter(-1)}>decrementByone</button>
    </>
  );
}

export default Task;

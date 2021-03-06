import React, { useState } from "react";
import Taskitem from "./Taskitem";
function Check() {
  const [task, setTask] = useState("");
  const [query, setQuery] = useState([]);

  const handleadd = () => {
    const payload = {
      title: task,
      status: false
    };
    let newTask = [...query, payload];
    setQuery(newTask);
  };
  console.log(query);
  function showtheoutput(e) {
    const { value } = e.target;
    setTask(value);
  }
  return (
    <>
      <h1>Task</h1>
      <input
        type="text"
        placeholder="add your work here pls"
        onChange={showtheoutput}
        value={task}
      />
      <button onClick={handleadd}>Add</button>
      {query.map((el, index) => {
        return <Taskitem {...el} color={index % 2 == 0 ? "red" : "yellow"} />;
      })}
    </>
  );
}

export default Check;

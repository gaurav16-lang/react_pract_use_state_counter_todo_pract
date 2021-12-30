import "./styles.css";
import Task from "./Task";

import Taskitem from "./Taskitem";

import Check from "./Check";

export default function App() {
  return (
    <div className="App">
      <Task />
      <Taskitem />

      <Check />
    </div>
  );
}

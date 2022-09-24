import React from "react";

const Input = (props) => {
  return (
    <div className="tasks">
      <label>Input Task: </label>
      <input
        type="text"
        name="task"
        value={props.currentTask}
        onChange={(e) => {
          props.handleChange(e);
        }}
      />
      <button onClick={props.addTask}>Add</button>
    </div>
  );
};

export default Input;

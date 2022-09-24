import React, { useState } from "react";
import Tasks from "./Tasks";
import Input from "./Input";

const TodoList = () => {
  // Set up state "tasks"
  // Add some items to initial state
  const [tasks, manageTasks] = useState([
    "Sweep the Floor",
    "Do Dishes",
    "Make Bed",
    "Feed the Dog",
  ]);

  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    let myNewList = [...tasks, currentTask];
    manageTasks(myNewList);
    console.log(tasks);
    setCurrentTask("");
  };

  const removeTask = (index) => {
    let taskList = [...tasks];
    taskList.splice(index, 1);
    manageTasks(taskList);
  };
  const handleChange = (event) => {
    console.log(event.target.value, "target");
    setCurrentTask(event.target.value);
  };

  return (
    <div className="list">
      <Input
        handleChange={handleChange}
        addTask={addTask}
        currentTask={currentTask}
      />
      {/* Passing state "tasks" into the component Tasks */}
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default TodoList;

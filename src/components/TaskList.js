import React from "react";
import Task from "./Task";


function TaskList({tasks}) {
  const taskItems = tasks.map((task) => 
    <Task key={task.text} category={task.category} text={task.text}/>
  )
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;

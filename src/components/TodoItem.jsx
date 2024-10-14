"use client";

import React from "react";

const TodoItem = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="flex flex-col justify-around">
      <ul>
        {tasks.map((task) => (
          <li className="flex justify-between text-white" key={task.id}>
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
            <button onClick={() => toggleComplete(task.id)}>
              {!task.isCompleted && "✔"}
            </button>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;

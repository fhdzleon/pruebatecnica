"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import FilterTodos from "./FilterTodos";

const TodoTask = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim().length === 0) {
      return alert("No puede agregar una tarea vacía");
    }

    const newTask = {
      id: idCounter,
      name: task,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");
    setIdCounter((prevId) => prevId + 1);
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completados") return task.isCompleted;
    if (filter === "pendientes") return !task.isCompleted;
    return true;
  });

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <form className="space-x-4 " onSubmit={handleSubmit}>
          <input
            className="p-2 text-black rounded-full"
            placeholder="Nueva tarea"
            value={task}
            onChange={handleChange}
            type="text"
          />
          <button className="p-2 bg-red-600 rounded-full" type="submit">
            Agregar
          </button>
        </form>

        <FilterTodos onFilterChange={handleFilter} />
      </div>
      <div>
        <TodoItem
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default TodoTask;

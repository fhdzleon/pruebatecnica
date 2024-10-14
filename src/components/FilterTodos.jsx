"use client";

import React from "react";

const FilterTodos = ({ onFilterChange }) => {
  const handleFilter = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <select
        className="p-3 text-black rounded-full"
        name="status"
        id="status"
        onChange={handleFilter}
      >
        <option value="all">Mostrar todo</option>
        <option value="completados">Tareas completadas</option>
        <option value="pendientes">Tareas pendientes</option>
      </select>
    </div>
  );
};

export default FilterTodos;

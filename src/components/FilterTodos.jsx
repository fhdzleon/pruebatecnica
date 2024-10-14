"use client";

import React from "react";

const FilterTodos = ({ onFilterChange }) => {
  const handleFilter = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <select
        className="text-black"
        name="status"
        id="status"
        onChange={handleFilter}
      >
        <option value="all">Todas</option>
        <option value="completados">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>
  );
};

export default FilterTodos;

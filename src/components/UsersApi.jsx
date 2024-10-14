"use client";

import React from "react";
import fetchUserData from "@/helpers/fetchUserData";

const UsersApi = () => {
  return (
    <div>
      <button
        className="p-2 text-black rounded-full bg-slate-300"
        onClick={fetchUserData}
      >
        Usuarios ejercicio Fetch
      </button>
    </div>
  );
};

export default UsersApi;

"use client";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser, removeUser } from "../redux/store";
const Users = ({ users, addUser, removeUser }) => {
  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (name) {
      const newUser = {
        id: Date.now(),
        name,
      };
      addUser(newUser);
      setName("");
    }
  };

  const handleRemoveUser = (id) => {
    removeUser(id);
  };

  return (
    <div>
      <h1 className="ml-4">User List</h1>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 bg-gray-600 text-white rounded-sm hover:bg-gray-700 border-2-black mr-4 ml-4 "
      />
      <button
        onClick={handleAddUser}
        className="px-4 py-2 bg-sky-500 text-white rounded-md hover:sky-red-600 transition duration-200"
      >
        Add User
      </button>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="mt-2 py-0 bg-gray-500 text-white rounded-sm transition duration-200 mr-2 ml-4 w-full h-[50px]"
          >
            {user.name}
            <button
              onClick={() => handleRemoveUser(user.id)}
              className="px-4 py-0 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 mt-4 ml-16 mb-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  addUser,
  removeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

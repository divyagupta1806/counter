"use client";
import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Link from "next/link";
import { clearState, decrement, increment } from "@/redux/store";
// const increment = (number) => ({
//   type: "INCREMENT",
//   data: number,
// });

// const decrement = () => ({
//   type: "DECREMENT",
// });
const About = ({ increment, decrement, clearState }) => {
  const [number, setnumber] = useState();
  const counter = useSelector((state) => state.counter);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <Link href="/" className="text-lg text-red-600 ml-8 mt-2">
          Home
        </Link>
      </nav>
      <div className="ml-4">
        <h2 className="ml-4">Counter: {counter}</h2>
        <input
          type="number"
          placeholder="Enter custom number"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
          className="px-4 py-2 bg-gray-600 text-white rounded-sm hover:bg-gray-700 border-2-black mr-4 ml-4 mb-2 "
        />

        <div className="mb-4">
          <button
            onClick={() => dispatch(increment(number))}
            className="px-4 py-2 mr-4 ml-4 bg-gray-600 text-white rounded-md hover:bg-gray-700  transition duration-200"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Decrement
          </button>
        </div>

        <h3 className="ml-4">Users:</h3>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="px-4 py-2 mr-4 ml-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200 mb-2"
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={clearState}
        className="px-4 py-2 mr-4 ml-8 bg-gray-600 text-white rounded-sm hover:bg-gray-700 transition duration-200 mb-2"
      >
        Clear everything, person logged out
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
  clearState,
};
export default connect(mapStateToProps, mapDispatchToProps)(About);

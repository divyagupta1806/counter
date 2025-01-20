"use client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/store";
import Link from "next/link";

const Counter = ({ counter, increment, decrement }) => {
  useEffect(() => {
    console.log("counter", counter);
    localStorage.setItem("counter", counter);
  }, [counter]);

  

  useEffect(() => {
    console.log("counter");
    const storedCounter = localStorage.getItem("counter");
    if (storedCounter) {
    }
  }, []);

  return (
    <div>
      <nav>
        <Link href="/about" className="text-lg text-red-600 ml-4">
          About
        </Link>
      </nav>
      <h1 className="ml-4">Counter: {counter}</h1>

      <button
        onClick={increment}
        className="px-4 py-2 mr-4 ml-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
      >
        Increment
      </button>

      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
      >
        Decrement
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

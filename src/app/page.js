import React from "react";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
import Counter from "../components/Counter";
import Users from "../components/Users";

export default function Home() {
  return (
    // <Provider store={store}>
    <div>
      <h1 className="ml-2 py-2 px-4 text-3xl"> Redux Counter</h1>
      <Counter />
      <Users />
    </div>
    // </Provider>
  );
}

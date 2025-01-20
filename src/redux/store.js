import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  counter:
    typeof window !== "undefined" ? +localStorage.getItem("counter") || 0 : 0,
  users:
    typeof window !== "undefined" && localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [],
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

const increment = (data) => ({ type: INCREMENT, data });
const decrement = () => ({ type: DECREMENT });
const addUser = (user) => ({ type: ADD_USER, payload: user });
const removeUser = (userId) => ({ type: REMOVE_USER, payload: userId });
const clearState = () => ({ type: "CLEAR_STATE" });

const rootReducer = (state = initialState, action) => {
  console.log(action, "actionaction");
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "CLEAR_STATE":
      return initialState;
    default:
      return state;
  }
};
const store = configureStore({
  reducer: rootReducer,
});
export { store, increment, decrement, addUser, removeUser, clearState };

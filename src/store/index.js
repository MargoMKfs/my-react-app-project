import { configureStore } from "@reduxjs/toolkit";
import authRecuder from "./auth";
import counterReducer from "./counter";
import randomNumReducer from "./randomNum";

const store = configureStore({
  reducer: {
    auth: authRecuder,
    counter: counterReducer,
    randomNum: randomNumReducer,
  },
});

export default store;

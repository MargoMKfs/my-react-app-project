import { createSlice } from "@reduxjs/toolkit";

const initCounter = {
  counter: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initCounter,
  reducers: {
    addOne(state) {
      state.counter = state.counter + 1;
    },
    subOne(state) {
      state.counter = state.counter - 1;
    },
    addNum(state, action) {
      state.counter += +action.payload;
    },
    subNum(state, action) {
      state.counter += -action.payload;
    },
    clearToCero(state) {
      state.counter += +"0";
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

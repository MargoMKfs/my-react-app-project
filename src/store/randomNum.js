import { createSlice } from "@reduxjs/toolkit";

const initState = {
  randomNum: "",
};

const randomSlice = createSlice({
  name: "randomNum",
  initialState: initState,
  reducers: {
    random(state) {},
  },
});

export const randomActions = randomSlice.actions;
export default randomSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  loggedIn: false,
  userData: null,
  userInfo: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
    },
    logout(state) {
      return initAuthState;
    },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

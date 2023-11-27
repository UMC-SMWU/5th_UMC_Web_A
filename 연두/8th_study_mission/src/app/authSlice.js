import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isLoggedIn: false,
    id: "",
    pw: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.isLoggedIn = true;
      state.user.id = action.payload.userId;
      state.user.pw = action.payload.password;
    },
    logoutUser: (state) => {
      state.user.isLoggedIn = false;
      state.user.id = "";
      state.user.pw = "";
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.id = action.payload.userId;
      state.pw = action.payload.password;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

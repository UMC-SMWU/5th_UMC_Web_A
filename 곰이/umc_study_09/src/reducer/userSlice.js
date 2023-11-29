import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: '',
  },
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.AccessToken;
      return state;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;

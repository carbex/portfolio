import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  token: null,
  role: 2,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.login = action.payload.login;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;

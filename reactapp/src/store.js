import userReducer from "./use-case/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { user: userReducer } });

export default store;

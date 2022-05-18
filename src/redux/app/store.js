import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
import  postReducer  from "../features/posts/postSlice";
export const store = configureStore({
  reducer: { auth: authReducer, user: userReducer,posts:postReducer },
});

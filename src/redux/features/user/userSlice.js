import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  followUser: {},
  uploadImage: "",
  followUserName:""
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUserData: (state, action) => {
      state.users = action.payload;
    },
    getUserData: (state, action) => {
      state.user = action.payload;
    },
    followUser: (state, action) => {
      state.followUser = action.payload;
    },
    unfollowUser: (state, action) => {
      state.followUser = action.payload;
    },
    uploadImage: (state, action) => {
      state.uploadImage = action.payload;
    },
    followUserName:(state,action)=>{
      state.followUserName=action.payload
    }
  },
});
export const {
  getAllUserData,
  getUserData,
  followUser,
  unfollowUser,
  uploadImage,
  followUserName
} = userSlice.actions;
export default userSlice.reducer;

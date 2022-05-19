import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  createPost: [],
  id: "",
  postInput: "",
  bookmarkPost: [],
  commentInput: "",
  editCommentInput: "",
  commentId: "",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addToBookmark: (state, action) => {
      state.bookmarkPost = action.payload;
    },
    removeFromBookmark: (state, action) => {
      state.bookmarkPost = action.payload;
    },
    getBookmark: (state, action) => {
      state.bookmarkPost = action.payload;
    },
    likePost: (state, action) => {
      state.createPost = action.payload;
    },
    dislikePost: (state, action) => {
      state.createPost = action.payload;
    },
    getPosts: (state, action) => {
      state.createPost = action.payload;
    },
    getCreatePost: (state, action) => {
      state.createPost = action.payload;
    },
    editPost: (state, action) => {
      state.createPost = action.payload;
    },
    deletePost: (state, action) => {
      state.createPost = action.payload;
    },
    commentInputValue: (state, action) => {
      state.commentInput = action.payload;
    },
    postInputValue: (state, action) => {
      state.postInput = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    getCommentId: (state, action) => {
      state.commentId = action.payload;
    },
  },
});

export const {
  addToBookmark,
  removeFromBookmark,
  getBookmark,
  likePost,
  dislikePost,
  getPosts,
  getCreatePost,
  editPost,
  deletePost,
  commentInputValue,
  postInputValue,
  getId,
  getCommentId,
} = postSlice.actions;
export default postSlice.reducer;

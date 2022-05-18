import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    createPost: [],
    id:"",
    postInput:"",
    bookmarkPost:[],
    commentInput:"",
    editCommentInput:"",
    commentId:"",
    status:"idel",
    
}


// export const loadPosts=createAsyncThunk("posts/loadPosts",async()=>{
//     const { data } = await axios.get("/api/posts");
//     return data.posts
// })
export const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        addToBookmark:(state,action)=>{
            state.bookmarkPost=action.payload
        },
        removeFromBookmark:(state,action)=>{
            state.bookmarkPost=action.payload
        },
        getBookmark:(state,action)=>{
            state.bookmarkPost=action.payload
        },
        likePost:(state,action)=>{
            state.createPost=action.payload
        },
        dislikePost:(state,action)=>{
            state.createPost=action.payload
        },
        getPosts:(state,action)=>{
            state.createPost=action.payload
        },
        getCreatePost:(state,action)=>{
            state.createPost=action.payload
        },
        editPost:(state,action)=>{
            state.createPost=action.payload
        },
        deletePost:(state,action)=>{
            state.createPost=action.payload
        },
        commentInputValue:(state,action)=>{
            state.commentInput=action.payload
        },
        postInputValue:(state,action)=>{
            state.postInput=action.payload
        },
        getId:(state,action)=>{
            state.id=action.payload
        },
        getCommentId:(state,action)=>{
            state.commentId=action.payload
        }
    },

    // extraReducers:{
    //     [loadPosts.pending]:(state)=>{
    //         state.status="loading"
    //     },
    //     [loadPosts.fulfilled]:(state,action)=>{
    //         state.createPost=action.payload
    //         state.status="fulfilled"
    //     },
    //     [loadPosts.rejected]:(state)=>{
    //         state.status="rejected"
    //     }
    // }

})

export const {addToBookmark,removeFromBookmark,getBookmark,likePost,dislikePost,getPosts,getCreatePost,editPost,deletePost,commentInputValue,postInputValue,getId,getCommentId} =postSlice.actions;
export default postSlice.reducer;
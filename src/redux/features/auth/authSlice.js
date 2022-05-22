import {createSlice} from '@reduxjs/toolkit'

const initialState={
    token:localStorage.getItem("token")?true:false,
    signupToken:localStorage.getItem("signupToken")?true:false,
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
}



export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signinBtn:(state)=>{
            state.token=true
        },
        logoutBtn:(state)=>{
            state.token=false
        },
        userData:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {signinBtn,logoutBtn,userData
    ,signupUser}=authSlice.actions;

export default authSlice.reducer;
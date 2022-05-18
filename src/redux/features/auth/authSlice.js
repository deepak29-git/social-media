import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:localStorage.getItem("token")?true:false,
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
}



export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signinBtn:(state)=>{
            state.value=true
        },
        logoutBtn:(state)=>{
            state.value=false
        },
        signupBtn:(state)=>{
            state.value=true
        },
        userData:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {signinBtn,logoutBtn,userData,signupBtn}=authSlice.actions;

export default authSlice.reducer;
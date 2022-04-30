import { createContext, useContext, useState } from "react";

const AuthContext=createContext(null);

const AuthProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(localStorage.getItem("token")?true:false)
    return <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>
}
   
const useAuth=()=>useContext(AuthContext)

export {AuthProvider,useAuth}
import { createContext, useContext, useReducer, useState } from "react";
import { userReducer } from "../Reducer/user-reducer";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    users: [],
    user:{},
    followUser:{},
    uploadImage:null
  });

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };

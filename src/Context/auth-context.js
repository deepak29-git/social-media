import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

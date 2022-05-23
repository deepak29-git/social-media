import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const RequiresAuth = ({ children }) =>{
  const {token}=useSelector(state=>state.auth)
  return token ? children : <Navigate to="/signin" replace/>;
}

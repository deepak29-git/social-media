import "./App.css";
import {Navbar,SignIn,Signup,Home,PageNotFound,Bookmark,Profile} from './import'
import { Routes, Route } from "react-router-dom";
import {useAuth} from './Context/auth-context'

function App() {
  const { isAuth } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {!isAuth ? (
          <Route path="/" element={<SignIn />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";

import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { SignIn } from "./Pages/Signin/Signin";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Pages/Signup/Signup";
import { useAuth } from "./Context/auth-context";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";

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
      </Routes>
    </div>
  );
}

export default App;

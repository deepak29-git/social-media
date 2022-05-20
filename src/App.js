import "./App.css";
import {Navbar,SignIn,Signup,Home,PageNotFound,Bookmark,Profile,Following,Followers, Explore} from './import'
import { Routes, Route } from "react-router-dom";
import { SingleProfile } from "./Pages/SingleProfile/SingleProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/profile/:userName" element={<Profile/>}/>
        <Route path=":username" element={<SingleProfile/>}/>
        <Route path="/following" element={<Following/>}/>
        <Route path="/followers" element={<Followers/>}/>
      </Routes>
    </div>
  );
}

export default App;

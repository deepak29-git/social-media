import "./App.css";
import {
  Navbar,
  SignIn,
  Signup,
  Home,
  PageNotFound,
  Bookmark,
  Profile,
  Following,
  Followers,
  Explore,
} from "./import";
import { Routes, Route } from "react-router-dom";
import { SingleProfile } from "./Pages/SingleProfile/SingleProfile";
import { RequiresAuth } from "./Components/RequiresAuth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<RequiresAuth><Home /></RequiresAuth>} />
          <Route path="/explore" element={<RequiresAuth><Explore /></RequiresAuth>} />
          <Route path="/bookmark" element={<RequiresAuth><Bookmark /></RequiresAuth>} />
          <Route path="/profile/:userName" element={<RequiresAuth><Profile /></RequiresAuth>} />
          <Route path="/following" element={<RequiresAuth><Following /></RequiresAuth>} />
          <Route path="/followers" element={<RequiresAuth><Followers /></RequiresAuth>} />
          <Route path=":username" element={<RequiresAuth><SingleProfile /></RequiresAuth>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

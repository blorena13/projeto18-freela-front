import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import Follows from "./pages/Follows";
import Search from "./pages/Search";
import Users from "./pages/Users";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/home/me" element={<Profile />} />
    <Route path="/newPost" element={<NewPost />} />
    <Route path="/:type" element={<Follows />} />
    <Route path="/users" element={<Search />} />
    <Route path="/users/:id" element={<Users />} />
   </Routes>
   </BrowserRouter>
  );
}



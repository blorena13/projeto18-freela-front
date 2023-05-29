import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import Follows from "./pages/Follows";
import Search from "./pages/Search";
import Users from "./pages/Users";
import { InfoProvider } from "./context/InfoContext";

export default function App() {
  return (
   <BrowserRouter>
   <InfoProvider>
   <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/home/me" element={<Profile />} />
    <Route path="/newPost" element={<NewPost />} />
    <Route path="/me/:type" element={<Follows />} />
    <Route path="/users" element={<Search />} />
    <Route path="/users/:id" element={<Users />} />
   </Routes>
   </InfoProvider>
   </BrowserRouter>
  );
}



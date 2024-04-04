import React from "react";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Hostel from "./pages/Hostel";
import "./App.css";
import Events from "./pages/Events";
import Post from "./pages/Post";
import Landingpage from "./pages/Landingpage";
import Adminlogin from "./components/Admin/Adminlogin";
import AdminDashboard from "./components/Admin/AdminDasbboard";
import Other from "./pages/Other";
import AddUserPage from "./components/Admin/AddUserPage";
import AdminRegistration from "./components/Admin/AdminRegistration";
import Forgotten from "./pages/Forgotten";
import Adminpost from "./components/Admin/Adminpost";
import AddCoursePage from "./components/Admin/Addcourse";
import AddBookPage from "./components/Admin/Addbook";
import AddSyllabusPage from "./components/Admin/Addsy";
import UpdateHostelPage from "./components/Admin/UpdateHos";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/Admin/dashboard" element={<AdminDashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login/Home" element={<Home />} />
        <Route path="/login/Home/CourseDetails" element={<CourseDetails />} />
        <Route path="/login/Home/hostel" element={<Hostel />} />
        <Route path="/login/Home/Events" element={<Events />} />
        <Route path="/login/Home/Others" element={<Other />} />
        <Route path="/login/Home/Post" element={<Post />} />
        <Route path="/Admin/dashboard/Adduserpage" element={<AddUserPage />} />
        <Route path="/Adminregister" element={<AdminRegistration />} />
        <Route path="/forgottenpassword" element={<Forgotten />} />
        <Route path="/Admin/dashboard/Adminpost" element={<Adminpost />} />
        <Route path="/Admin/dashboard/Addcourse" element={<AddCoursePage />} />
        <Route path="/Admin/dashboard/Addbook" element={<AddBookPage />} />
        <Route path="/Admin/dashboard/Addsy" element={<AddSyllabusPage />} />
        <Route
          path="/Admin/dashboard/update-hostel/:hostelId"
          element={<UpdateHostelPage />}
        />

        
      </Routes>
    </Router>
  );
}

export default App;

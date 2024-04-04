import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";

const Header = () => {
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/logout")
      .then((response) => {
        console.log(response.data.message);
        // Redirect to the root page
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="header">
      <div className="heading">
        <h1 className="h1">Student Portal</h1>
      </div>
      <div className="header-links">
        <Link to="/login/Home" className="header-link">
          Home{" "}
        </Link>
        <Link to="/login/Home/CourseDetails" className="header-link">
          Course Details
        </Link>
        <Link to="/login/Home/hostel" className="header-link">
          Hostel
        </Link>
        <Link to="/login/Home/events" className="header-link">
          Events
        </Link>
        <Link to="/login/Home/Post" className="header-link">
          Posts
        </Link>
        <Link to="/login/Home/others" className="header-link">
          Others
        </Link>
        <Link onClick={handleLogout} className="header-link">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;

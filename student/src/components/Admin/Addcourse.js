import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an object containing the course data to be sent to the server
    const newCourseData = {
      course_name: courseName,
      course_desc: courseDesc,
    };

    // Make a POST request to add the new course
    axios
      .post("http://localhost:8000/addCourse", newCourseData)
      .then((response) => {
        // Handle the response if needed (e.g., show a success message or redirect to the admin dashboard)
        console.log("Course added successfully");
        // Navigate to the admin dashboard
        navigate("/Admin/dashboard");
      })
      .catch((error) => {
        console.log("Error adding course:", error);
      });
  };

  return (
    <div>
      <h5 className="admin-dashboard-section-title">Add Course</h5>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseDesc">Description:</label>
          <textarea
            id="courseDesc"
            value={courseDesc}
            onChange={(e) => setCourseDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCoursePage;

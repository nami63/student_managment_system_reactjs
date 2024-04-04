import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddSyllabusPage = () => {
  const [courseName, setCourseName] = useState("");
  const [syllabusContent, setSyllabusContent] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/addsyllabus", {
        name: courseName,
        syllabus_link: syllabusContent,
      })
      .then((response) => {
        console.log("Syllabus added successfully");
        // Navigate to the syllabus page or perform any other action after adding the syllabus
        navigate("/Admin/dashboard"); // Replace "/syllabus" with the desired route path
      })
      .catch((error) => {
        console.log("Error adding syllabus:", error);
      });
  };

  return (
    <div>
      <h5 className="admin-dashboard-section-title">Add Syllabus</h5>
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
          <label htmlFor="syllabusContent">Syllabus:</label>
          <textarea
            id="syllabusContent"
            value={syllabusContent}
            onChange={(e) => setSyllabusContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Syllabus</button>
      </form>
    </div>
  );
};

export default AddSyllabusPage;

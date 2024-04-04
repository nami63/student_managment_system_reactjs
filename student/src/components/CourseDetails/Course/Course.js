import React, { useState, useEffect } from "react";
import "./Course.css";
import axios from "axios";

function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Fetch courses from the backend API
    axios
      .get("http://localhost:8000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="course-container">
      <div className="courses">
        <h2 className="d">COURSES</h2>
      </div>
      <div className="subheader">
        <h3>BTech Courses offered by Cochin University</h3>
      </div>
      <div className="photo-and-course">
        <div className="course-photo-container">
          <img
            src="https://soe.cusat.ac.in/images/demo/office.png" // Replace with the actual image URL
            alt="officePhoto"
            className="course-photo"
          />
        </div>
        <ul className="course-list">
          {courses.map((course) => (
            <li
              key={course.course_id}
              onClick={() => handleCourseClick(course)}
            >
              <h4 className="course-name">{course.course_name}</h4>
            </li>
          ))}
        </ul>
      </div>
      {selectedCourse && (
        <div>
          <h3 className="selected-course-name">{selectedCourse.course_name}</h3>
          <p className="selected-course-desc">{selectedCourse.course_desc}</p>
        </div>
      )}
    </div>
  );
}

export default Course;

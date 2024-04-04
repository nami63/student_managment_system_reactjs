import React from "react";
import Course from "../components/CourseDetails/Course/Course";
import Footers from "../components/Home/Footers";
import Header from "../components/Home/Header";
import Syllabus from "../components/CourseDetails/syllabus";
import Alu from "../components/CourseDetails/Alu/Alu";

const CourseDetails = () => {
  return (
    <div className="App1">
      <Header />
      <Course />
      <Syllabus />
      <Alu />
      <Footers />
    </div>
  );
};

export default CourseDetails;

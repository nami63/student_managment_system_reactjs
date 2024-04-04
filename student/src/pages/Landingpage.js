import React from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import img111 from "./CUSAT.png";
import img10 from "./gate.jpeg";
import img11 from "./kaka.jpg";
import img12 from "./night.jpg";

const LandingPage = () => {
  return (
    <div className="last">
      <div className="landing-page">
        <div className="top">
          <div className="options-container">
            <Link to="/login" className="option-link">
              Login
            </Link>
          </div>
          <div className="options-container">
            <Link to="/register" className="option-link">
              Register
            </Link>
          </div>
          <div className="options-container">
            <Link to="/Adminlogin" className="option-link">
              Admin
            </Link>
          </div>
        </div>
        <img src={img111} alt="img111" className="img" />
        <h1 className="landing">COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</h1>
      </div>
      <div className="ttr">
        <div className="marquee">
          <span>
            NEWS:&nbsp;&nbsp; RUSA invites Walk-in interview for the recruitment
            of Project Assistant &amp; Post Doctoral Fellow.
            &nbsp;&nbsp;&nbsp;&nbsp; Btech admissions first allotment is
            published. &nbsp;&nbsp;&nbsp;&nbsp; CUSAT is ranked 37 in India as
            per the latest NIRF Ranking 2023. &nbsp;&nbsp;&nbsp;&nbsp; Cusat has
            been awarded 'A+' grade by the National Assessment and Accreditation
            Council (NAAC). &nbsp;&nbsp;&nbsp;&nbsp; CUSAT has acquired tier-1
            in NBA accreditation.
          </span>
        </div>
        <div className="card-containera">
          <div className="carda">
            <div className="card-inner">
              <div className="card-front">
                <img src={img10} alt="img10" className="card-image" />
              </div>
              <div className="card-back">
                <p>
                  Established in 1971, CUSAT offers undergraduate, postgraduate,
                  and doctoral programs in various fields of study including
                  engineering, science, technology, humanities, management, and
                  law. CUSAT is known for its strong emphasis on research and
                  innovation, and it has been ranked among the top universities
                  in India. The university has multiple campuses and research
                  centers, providing state-of-the-art facilities for students
                  and faculty.
                </p>
              </div>
            </div>
          </div>
          <div className="carda">
            <div className="card-inner">
              <div className="card-front">
                <img src={img11} alt="img11" className="card-image" />
              </div>
              <div className="card-back">
                <p>
                  Some notable features of CUSAT include:
               <br/>
                  Academic Programs: CUSAT offers a wide range of academic
                  programs, including B.Tech, M.Tech, MBA, M.Sc, M.A, LLB, PhD,
                  and more.
                  <br />
                  Entrance Exams: CUSAT conducts its own entrance exams for
                  admission to different courses.
                  <br />
                  Research and Innovation: CUSAT has a strong research culture
                  and encourages innovation.
                  <br />
                  Industry Partnerships: The university has collaborations with
                  leading industries and organizations.
                </p>
              </div>
            </div>
          </div>
          <div className="carda">
            <div className="card-inner">
              <div className="card-front">
                <img src={img12} alt="img12" className="card-image" />
              </div>
              <div className="card-back">
                <p>
                  CUSAT provides modern infrastructure and facilities to its
                  students, including libraries, laboratories, computer centers,
                  sports facilities, hostels, and a well-established central
                  library with a vast collection of books and research papers.
                  CUSAT is committed to providing quality education, fostering
                  research, and producing skilled professionals in various
                  disciplines. It has a diverse and vibrant academic community,
                  attracting students from across India and abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

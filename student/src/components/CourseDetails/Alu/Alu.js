import React from "react";
import "./Alu.css";
import img123 from "./alu1.jpg";
import img132 from "./alu3.jpg";
import img124 from "./alu2.jpg";

const Alu = () => {
  return (
    <div>
      <h1 className="heading">Alumni</h1>
      <div className="box1">
        <div className="card">
          <div className="imgBx">
            <img src={img123} alt="img123" />
          </div>
          <div className="details">
            <h2>
              Jayakrishnan T
              <br />
              <span>Founder and CEO of ASIMOV Robotics Pvt Ltd</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img124} alt="img124" />
          </div>
          <div className="details">
            <h2>
              Greeshma Bernad
              <br />
              <span>Group Project Manager at HCL Technologies</span>
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img src={img132} alt="img132" />
          </div>
          <div className="details">
            <h2>
              Pradeep Dhakshinamoorthy
              <br />
              <span>Principal Software Engineer at Expedia Group</span>
            </h2>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Alu;

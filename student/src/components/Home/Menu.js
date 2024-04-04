import React from "react";
import "./Menu.css";
import img1 from "./katha.png";
import img2 from "./night.jpg";
import img3 from "./football.jpg";
import img4 from "./gallery13 (1).jpg";
import img5 from "./c-sis.jpg";

const Menu = () => {
  return (
    <div>
      <div className="container">
        <Slideshow />
      </div>
    </div>
  );
};

const Slideshow = () => {
  // Removed the unused variable isPaused from this component
  return (
    <div className="potter">
      <input type="radio" name="slide" id="img1" defaultChecked />
      <input type="radio" name="slide" id="img2" />
      <input type="radio" name="slide" id="img3" />
      <input type="radio" name="slide" id="img4" />
      <input type="radio" name="slide" id="img5" />

      <div className="slide first">
        <img src={img1} alt="img1" />
        <div className="p">
          <h1>Cochin University of Science and Technology (CUSAT)</h1>
        </div>
      </div>

      <div className="slide">
        <img src={img2} alt="img2" />
        <div className="p">
          It was initially constituted as the University of Cochin through an
          Act of Kerala Government on 10th July 1971.
        </div>
      </div>
      <div className="slide">
        <img src={img3} alt="img3" />
        <div className="p">
          The University of Cochin was re‐constituted as Cochin University of
          Science and Technology (CUSAT) in February 1986.
        </div>
      </div>
      <div className="slide">
        <img src={img4} alt="img4" />
        <div className="p">
          its objectives as "promoting Graduate and Post‐Graduate studies and
          Advanced Research in Applied Sciences, Technology, Industry, Commerce,
          Management, and Social Sciences."
        </div>
      </div>
      <div className="slide">
        <img src={img5} alt="img5" />
        <div className="p">
          CUSAT is now a world-ranking university with the specific purpose of
          developing higher education, emphasizing post-graduate studies and
          research
        </div>
      </div>

      <div className="navi-auto">
        <div className="auto-bt1"></div>
        <div className="auto-bt2"></div>
        <div className="auto-bt3"></div>
        <div className="auto-bt4"></div>
        <div className="auto-bt5"></div>
      </div>

      <div className="navigation-man">
        <label htmlFor="img1" className="manual-b"></label>
        <label htmlFor="img2" className="manual-b"></label>
        <label htmlFor="img3" className="manual-b"></label>
        <label htmlFor="img4" className="manual-b"></label>
        <label htmlFor="img5" className="manual-b"></label>
      </div>
    </div>
  );
};

export default Menu;

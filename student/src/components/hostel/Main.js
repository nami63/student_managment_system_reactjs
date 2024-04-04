import React from "react";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="background"></div>
      <div className="background-texture"></div>
      <h2 className="categoriestitle">Hostels</h2>
      <section className="carousel">
        
        <div className="carousel__container">
          <div className="content">
            <span style={{ "--i": 1 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/sagar.png"
                alt="hos1"/>
               
                <h5 className="carousel-item__details--title">Sagar Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
             
            </span>
            <span style={{ "--i": 2 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/Sahara.png"
                alt="hos4"
              />
               <h5 className="carousel-item__details--title">Sahara Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
            <span style={{ "--i": 3 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/Ananya.png"
                alt="hos5"
              />
               <h5 className="carousel-item__details--title">Ananya Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
            <span style={{ "--i": 4 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/WhatsApp_Image_2022-09-24_at_8.34.55_AM_6.jpeg"
                alt="hos2"
              />
               <h5 className="carousel-item__details--title">Anaswara Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
            <span style={{ "--i": 5 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/Anaswara.png"
                alt="hos3"
              />
               <h5 className="carousel-item__details--title">Anaswara Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
            <span style={{ "--i": 6 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/Alakananda.png"
                alt="hos5"
              />
               <h5 className="carousel-item__details--title">Alakananada Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
            <span style={{ "--i": 7 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/Anagha.png"
                alt="hos6"
              />
               <h5 className="carousel-item__details--title">Anangha Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
              <span style={{ "--i": 9 }}>
              <img
                className="carousel-item__img"
                src="https://hostels.cusat.ac.in/media/swaraj.png"
                alt="hos5"
              />
               <h5 className="carousel-item__details--title">Swaraj Hostel</h5>
                <h6 className="carousel-item__details--subtitle">ad</h6>
              
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;

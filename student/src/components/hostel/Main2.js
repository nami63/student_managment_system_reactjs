import axios from "axios";
import "./Main.css";
import React, { useState, useEffect } from "react";

function Main2() {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/hostel")
      .then((response) => {
        setHostels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hostels:", error);
      });
  }, []);

  return (
    <div className="hostel">
      <h2 className="subheader">About</h2>
      <div className="para9">
        {hostels.map((hostel) => (
          <div key={hostel.id}>
            <p>{hostel.Des}</p>
            <p>{hostel.des2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main2;
import React, { useState } from "react";
import "../../Register.css";

const Adminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the server with the username and password
    fetch("http://localhost:8000/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Save the token in local storage or session storage
          localStorage.setItem("token", data.token);

          // Redirect to the admin dashboard page
          window.location.href = "/admin/dashboard";
        } else {
          // Handle login error
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during login");
      });
  };

  return (
    <div className="background-container">
      <div className="con">
        <div className="box">
          <h2 className="ba">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <br />
            <br />
            <button className="but" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Save the token in local storage or session storage
          localStorage.setItem("token", data.token);

          // Set logged-in state to true
          setLoggedIn(true);

          // Redirect to the home page
          window.location.href = "/login/home";
        } else {
          // Handle login error
          setErrorMessage("Invalid email or password. Please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during login");
      });
  };

  if (loggedIn) {
    // Prevent rendering the login form if user is logged in
    return null;
  }

  return (
    
    <div className="background-container">
      <div className="hex-grid">
        <div className="light"></div>
        <div className="grid"></div>
      </div>
      <div className="blur-effect"></div>
      <div className="con">
        <div className="box">
          <h2 className="login">Login</h2>

          <form>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
            <button className="but" onClick={handleLogin}>
              Login
            </button>
            <br />
            <br />
            <p className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <p className="register-link">
              <Link to="/forgottenpassword">forgot password </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

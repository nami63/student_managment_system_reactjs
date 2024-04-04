import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const regex = /\S+@\S+\.\S+/;
    setIsEmailValid(regex.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (isEmailValid) {
      try {
        const res = await axios.post("http://localhost:8000/register", {
          name: name,
          email: email,
          password: password,
        });
        console.log(res);

        // Redirect to login page after successful registration
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="con">
      <div className="box">
        <h2 className="ba">Register</h2>
        <form>
          <label>User</label>
          <input
            required
            type="text"
            name="username"
            placeholder="Enter the username"
            onChange={handleNameChange}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter the email"
            onChange={handleEmailChange}
          />
          {!isEmailValid && <p>Email is not valid!</p>}
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter the password"
            onChange={handlePasswordChange}
          />
          <button className="but" onClick={handleClick}>
            Register
          </button>

          <br />
          <br />

          <p className="register-link">
            You have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

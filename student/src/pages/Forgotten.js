import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Login.css";

const ForgottenPassword = () => {
  const [forgotUsername, setForgotUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (event) => {
    setForgotUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      const res = await axios.post("http://localhost:8000/forgot-password", {
        username: forgotUsername,
        newPassword: newPassword,
      });

      console.log(res);
      setForgotUsername("");
      setNewPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      setSuccessMessage("Password reset successfully");
    } catch (err) {
      console.log(err);
      setErrorMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="con">
      <div className="box">
        <h2 className="forgot"> Forgot Password</h2>
        {successMessage && <p className="success">{successMessage}</p>}
        {!successMessage && (
          <form>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              placeholder="Enter your username"
              value={forgotUsername}
              onChange={handleUsernameChange}
            />
            <label>New Password</label>
            <input
              required
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <input
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button
              className="forgot-password-button but"
              onClick={handleForgotPassword}
            >
              Reset Password
            </button>
          </form>
        )}
        <p className="register-link">
          Remember your password?{" "}
          <Link to="/login" className="ba">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgottenPassword;

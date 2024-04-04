import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleCreateUser = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/register", {
        name: name,
        email: email,
        password: password,
      });
      console.log(res);
      navigate("/Admin/dashboard");
      // Reset form inputs after successful user creation
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-user-container">
      <h2 className="add-user-title">Add User</h2>
      <form className="add-user-form" onSubmit={handleCreateUser}>
        <label>Username:</label>
        <input
          required
          type="text"
          name="username"
          placeholder="Enter the username"
          value={name}
          onChange={handleNameChange}
        />

        <label>Email:</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter the email"
          value={email}
          onChange={handleEmailChange}
        />

        <label>Password:</label>
        <input
          required
          type="password"
          name="password"
          placeholder="Enter the password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button className="bu" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

export default AddUserPage;

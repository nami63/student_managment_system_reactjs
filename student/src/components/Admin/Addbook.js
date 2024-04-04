import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const [bookName, setBookName] = useState("");
  const [bookNo, setBookNo] = useState(0);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/addbooks", {
        book_name: bookName,
        book_no: bookNo,
      })
      .then((response) => {
        console.log("Book added successfully");
        // Navigate to the books page or perform any other action after adding the book
        navigate("/Admin/dashboard");
      })
      .catch((error) => {
        console.log("Error adding book:", error);
      });
  };

  return (
    <div>
      <h5 className="admin-dashboard-section-title">Add Book</h5>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bookNo">Number of Books:</label>
          <input
            type="number"
            id="bookNo"
            value={bookNo}
            onChange={(e) => setBookNo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;

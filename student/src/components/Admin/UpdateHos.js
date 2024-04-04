import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateHostelPage = () => {
  const { hostelId } = useParams();
  const navigate = useNavigate();
  const [hostel, setHostel] = useState(null);
  const [Des, setDes] = useState(""); // Changed back to Des instead of Des1
  const [des2, setDes2] = useState(""); // Changed to des2 instead of des1

  useEffect(() => {
    axios
      .get(`http://localhost:8000/hostel/${hostelId}`)
      .then((response) => {
        setHostel(response.data);
        setDes(response.data.Des);
        setDes2(response.data.des2); // Changed to des2 instead of des1
      })
      .catch((error) => {
        console.error("Error fetching hostel:", error);
      });
  }, [hostelId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedHostel = {
      Des: Des,
      des2: des2, // Changed to des2 instead of des1
    };
    try {
      await axios.put(`http://localhost:8000/hostel/${hostelId}`, updatedHostel);
      console.log("Hostel updated successfully");
      // Navigate to the main page after successful update
      navigate("/Admin/dashboard");
    } catch (error) {
      console.error("Error updating hostel:", error);
    }
  };

  if (hostel === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Hostel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Des">Description:</label>
          <input
            type="text"
            id="Des"
            value={Des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="des2">Description 2:</label> {/* Changed label text */}
          <input
            type="text"
            id="des2"
            value={des2}
            onChange={(e) => setDes2(e.target.value)} // Changed to des2 instead of des1
          />
        </div>
        <button type="submit">Update Hostel</button>
      </form>
    </div>
  );
};

export default UpdateHostelPage;

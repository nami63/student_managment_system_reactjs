import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CourseDetails/Course/Course.css";
import img1 from "./map.jpg";

function Othercon() {
  const [books, setBooks] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    // Fetch books from the backend API
    axios
      .get("http://localhost:8000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const handleToggleTable = () => {
    setShowTable((prevShowTable) => !prevShowTable);
  };

  return (
    <div>
      <h3 className="libary">School of Engineering Library</h3>

      <div className="para-and-table">
        <div className="para">
          School of Engineering (SOE) Library is one of the largest libraries
          that caters to the information needs of students, teachers, and
          research scholars belonging to the School. The library provides free
          and equal access to all sources of information. Open access is
          provided to ensure free searching, selection, and use of library
          materials. Library tickets are issued to members for lending books for
          outside use. The reading room of the library provides facilities for
          reference. The library is kept open for 9½ hours a day from 9 am to
          6.30 pm without a break. The library functions are managed by
          professionally competent staff members. The library keeps the
          resources in a secure environment for long use.
        </div>
        <div className="flex-container">
          <div className="table">
            <h4 className="h4">Library Resources</h4>
            <p className="para1" onClick={handleToggleTable}>
              Total Number of Books as on 31-03-2022
            </p>
            {showTable && (
              <table className="table-container">
                <tbody>
                  {books.map((book) => (
                    <tr key={book.id}>
                      <td>{book.books}</td>
                      <td>{book.bookno}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <div>
        <h4 className="h4">Digital Library </h4>
        <p className="para">
          CUSAT is maintaining a digital library for accessing faculty papers,
          seminar reports, teaching materials, syllabus, question papers etc.
          The Digital Library has been created using the DSpace open source
          software. School of Engineering is in the forefront of applying
          information technology to library service. It has added the largest
          number of contents to the digital library. CUSAT B.Tech Syllabus, List
          of Books, Journal Content pages and more than five thousand previous
          year question papers were added to the Digital Library. There are
          available online at{" "}
          <a href="http://dspace.cusat.ac.in/">http://dspace.cusat.ac.in/</a>
        </p>
      </div>
      <h4 className="h4">University Map </h4>
      <img src={img1} alt="img1"className="ig" />
    </div>
  );
}

export default Othercon;

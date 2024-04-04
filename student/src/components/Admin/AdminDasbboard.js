import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./adminDashboard.css";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      courses: [],
      syllabus: [],
      books: [],
      hostel: [],
    };
    this.removeUser = this.removeUser.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.removeSyllabus = this.removeSyllabus.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });

    axios
      .get("http://localhost:8000/courses")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch((error) => {
        console.log("Error fetching courses:", error);
      });

    axios
      .get("http://localhost:8000/syllabus")
      .then((response) => {
        this.setState({ syllabus: response.data });
      })
      .catch((error) => {
        console.log("Error fetching syllabus:", error);
      });

    axios
      .get("http://localhost:8000/books")
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
      axios
      .get("http://localhost:8000/hostel")
      .then((response) => {
        this.setState({ hostel: response.data }); // Fix: Set the hostel data in the state
      })
      .catch((error) => {
        console.error("Error fetching hostels:", error);
      });
  }

  removeUser(userId) {
    axios
      .delete(`http://localhost:8000/users/${userId}`)
      .then((response) => {
        console.log("User removed successfully");
        this.setState((prevState) => ({
          users: prevState.users.filter((user) => user.id !== userId),
        }));
      })
      .catch((error) => {
        console.log("Error removing user:", error);
      });
  }

  removeCourse(courseId) {
    axios
      .delete(`http://localhost:8000/courses/${courseId}`)
      .then((response) => {
        console.log("Course removed successfully");
        this.setState((prevState) => ({
          courses: prevState.courses.filter(
            (course) => course.course_id !== courseId
          ),
        }));
      })
      .catch((error) => {
        console.log("Error removing course:", error);
      });
  }

  removeBook(bookId) {
    axios
      .delete(`http://localhost:8000/books/${bookId}`)
      .then((response) => {
        console.log("Book removed successfully");
        this.setState((prevState) => ({
          books: prevState.books.filter((book) => book.id !== bookId),
        }));
      })
      .catch((error) => {
        console.log("Error removing book:", error);
      });
  }

  removeSyllabus(syllabussyllabus_id) {
    axios
      .delete(`http://localhost:8000/syllabus/${syllabussyllabus_id}`)
      .then((response) => {
        console.log("Syllabus removed successfully");
        this.setState((prevState) => ({
          syllabus: prevState.syllabus.filter(
            (item) => item.syllabus_id !== syllabussyllabus_id
          ),
        }));
      })
      .catch((error) => {
        console.log("Error removing syllabus:", error);
      });
  }

  render() {
    const { users, courses, syllabus, books, hostel } = this.state;

    return (
      <div className="admin-dashboard-container">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>

        <h5 className="admin-dashboard-section-title">Users</h5>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="bu"
                    onClick={() => this.removeUser(user.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to="/Admin/dashboard/Adduserpage"
          className="admin-dashboard-link"
        >
          Create New User
        </Link>
        <Link to="/Admin/dashboard/Adminpost" className="admin-dashboard-link">
          Posts
        </Link>

        <h5 className="admin-dashboard-section-title">Books</h5>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>No of Books</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.books}</td>
                <td>{book.bookno}</td>
                <td>
                  <button
                    className="bu"
                    onClick={() => this.removeBook(book.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Admin/dashboard/Addbook" className="admin-dashboard-link">
          Add book
        </Link>
        
        <h5 className="admin-dashboard-section-title">Courses</h5>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.course_desc}</td>
                <td>
                  <button
                    className="bu"
                    onClick={() => this.removeCourse(course.course_id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Admin/dashboard/Addcourse" className="admin-dashboard-link">
          Add course
        </Link>

       
        <h5 className="admin-dashboard-section-title">Syllabus</h5>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Syllabus</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {syllabus.map((item) => (
              <tr key={item.syllabus_id}>
                <td>{item.syllabus_id}</td>
                <td>{item.name}</td>
                <td>{item.syllabus_link}</td>
                <td>
                  <button
                    className="bu"
                    onClick={() => this.removeSyllabus(item.syllabus_id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Admin/dashboard/Addsy" className="admin-dashboard-link">
          add syllabus
        </Link>
        
      
        <h5 className="admin-dashboard-section-title">Hostels</h5>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {hostel.map((hostel) => (
              <tr key={hostel.id}>
                <td>{hostel.id}</td>
                <td>{hostel.Des}</td>
                <td>{hostel.des2}</td>
                <td>
                <Link to={`/Admin/dashboard/update-hostel/${hostel.id}`} className="admin-dashboard-link">
  Update Hostel
</Link>

              </td>
              </tr>
            ))}
          </tbody>
        </table>
        


      </div>
    );
  }
}

export default AdminDashboard;

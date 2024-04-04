import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import session from "express-session";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "your-secret-key", // Replace with your own secret key
    resave: false,
    saveUninitialized: false,
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root123",
  database: "trial",
});

const saltRounds = 10;
const secretKey = "mySecretKey";

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("No token provided");
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Failed to authenticate token");
    }

    // Check if the decoded token corresponds to an admin
    const adminId = decoded.id;
    const sql = "SELECT * FROM admin WHERE id = ?";
    db.query(sql, [adminId], (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error verifying admin");
      }

      if (results.length === 0) {
        return res.status(401).send("Unauthorized");
      }

      req.adminId = adminId;
      next();
    });
  });
};

// Admin Registration
app.post("/adminregister", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error registering new admin");
    }

    const sql = "INSERT INTO admin (username, password) VALUES (?, ?)";
    db.query(sql, [username, hashedPassword], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error registering new admin");
      } else {
        console.log(result);
        res.send("Admin registered successfully");
      }
    });
  });
});

// User Registration
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error registering new user");
    }

    const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error registering new user");
      } else {
        console.log(result);
        res.send("User registered successfully");
      }
    });
  });
});
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM user";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const sql = "DELETE FROM user WHERE id = ?";

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "User removed successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  });
});

// User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging in");
    }

    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(password, user.password, (err, passwordMatch) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error logging in");
        }

        if (passwordMatch) {
          const token = jwt.sign({ id: user.id }, secretKey);
          req.session.token = token; // Store the token in the session
          return res.json({ token });
        } else {
          return res.status(401).send("Invalid email or password");
        }
      });
    } else {
      return res.status(401).send("Invalid email or password");
    }
  });
});

app.post("/logout", (req, res) => {
  console.log(req.session); // Check if req.session is defined
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging out");
    }

    res.status(200).json({ message: "Logout successful" });
  });
});

// Admin Login
app.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM admin WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging in");
    }

    if (results.length > 0) {
      const admin = results[0];
      bcrypt.compare(password, admin.password, (err, passwordMatch) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error logging in");
        }

        if (passwordMatch) {
          const token = jwt.sign({ id: admin.id }, secretKey);
          return res.json({ token }); // Send the token as JSON
        } else {
          return res.status(401).send("Invalid username or password");
        }
      });
    } else {
      return res.status(401).send("Invalid username or password");
    }
  });
});

app.get("/courses", (req, res) => {
  const sql = "SELECT * FROM courses";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});
app.delete("/courses/:courseId", (req, res) => {
  const courseId = req.params.courseId;

  const sql = "DELETE FROM courses WHERE course_id = ?";
  db.query(sql, [courseId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error removing course");
    } else {
      console.log(result);
      res.send("Course removed successfully");
    }
  });
});

app.get("/syllabus", (req, res) => {
  const sql = "SELECT * FROM syllabus";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/syllabus/:syllabus_id", (req, res) => {
  const syllabusId = parseInt(req.params.syllabus_id); // Corrected variable name and parsing

  const sql = "DELETE FROM syllabus WHERE `syllabus_id` = ?"; // Corrected the column name

  db.query(sql, [syllabusId], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "Syllabus removed successfully" });
      } else {
        res.status(404).json({ message: "Syllabus not found" });
      }
    }
  });
});


app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/books/:id", (req, res) => {
  const booksId = parseInt(req.params.id);
  const sql = "DELETE FROM books WHERE id = ?";

  db.query(sql, [booksId], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "User removed successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  });
});

app.post("/forgot-password", (req, res) => {
  const { username, newPassword } = req.body;

  const sql = "SELECT * FROM user WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error resetting password");
    }

    if (results.length > 0) {
      const user = results[0];

      bcrypt.hash(newPassword, saltRounds, (err, hashedPassword) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error resetting password");
        }

        const updateSql = "UPDATE user SET password = ? WHERE id = ?";
        db.query(updateSql, [hashedPassword, user.id], (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).send("Error resetting password");
          }

          return res.send("Password reset successfully");
        });
      });
    } else {
      return res.status(401).send("Invalid username");
    }
  });
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  const sql = "INSERT INTO posts (title, content) VALUES (?, ?)";
  db.query(sql, [title, content], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error creating post");
    }

    console.log(result);
    res.send("Post created successfully");
  });
});

app.get("/posts", (req, res) => {
  const sql = "SELECT * FROM posts";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;

  const sql = "DELETE FROM posts WHERE id = ?";
  db.query(sql, [postId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error deleting post");
    }

    console.log(result);
    res.send("Post deleted successfully");
  });
});

app.get("/hostel", (req, res) => {
  const sql = "SELECT * FROM hostel";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/addCourse", (req, res) => {
  const { course_name, course_desc } = req.body;

  // Perform database insertion here
  const sql = "INSERT INTO courses (course_name, course_desc) VALUES (?, ?)";
  db.query(sql, [course_name, course_desc], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error adding course");
    } else {
      console.log(result);
      res.send("Course added successfully");
    }
  });
});
app.post("/addbooks", (req, res) => {
  const { book_name, book_no } = req.body;
  const sql = "INSERT INTO books (books, bookno) VALUES (?, ?)";
  db.query(sql, [book_name, book_no], (err, result) => {
    if (err) {
      console.log("Error adding book:", err);
      return res.status(500).send("Error adding book");
    }
    console.log("Book added successfully");
    res.status(200).json({ message: "Book added successfully" });
  });
});
app.post("/addsyllabus", (req, res) => {
  const { name, syllabus_link, course_id } = req.body; // Updated variable names

  const sql = "INSERT INTO syllabus (name, syllabus_link, course_id) VALUES (?, ?, ?)"; // Updated column names
  db.query(sql, [name, syllabus_link, course_id], (err, result) => { // Updated variable names
    if (err) {
      console.log("Error adding syllabus:", err);
      return res.status(500).send("Error adding syllabus");
    }
    console.log("Syllabus added successfully");
    res.status(200).json({ message: "Syllabus added successfully" });
  });
});


app.get("/hostel/:id", (req, res) => {
  const hostelId = req.params.id;

  const sql = "SELECT * FROM hostel WHERE id = ?";
  db.query(sql, [hostelId], (err, result) => {
    if (err) {
      console.error("Error fetching hostel:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "Hostel not found" });
      } else {
        res.json(result[0]);
      }
    }
  });
});

app.put("/hostel/:id", (req, res) => {
  const hostelId = req.params.id;
  const { Des, des2 } = req.body; // Changed des1 to des2 here

  const sql = "UPDATE hostel SET Des = ?, des2 = ? WHERE id = ?";
  db.query(sql, [Des, des2, hostelId], (err, result) => { // Changed des1 to des2 here
    if (err) {
      console.error("Error updating hostel:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Hostel not found" });
      } else {
        res.json({ message: "Hostel updated successfully" });
      }
    }
  });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

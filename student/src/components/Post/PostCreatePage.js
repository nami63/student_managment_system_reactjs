import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostCreatePage.css";

const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePostCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/posts",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(res);
      setTitle("");
      setContent("");
      setErrorMessage("");
      setSuccessMessage("Post created successfully");
      fetchPosts();
    } catch (err) {
      console.log(err);
      setErrorMessage("Failed to create post. Please try again.");
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="post-create-page">
      <h2>Create Post</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form>
        <label>Title</label>
        <input
          required
          type="text"
          name="title"
          placeholder="Enter post title"
          value={title}
          onChange={handleTitleChange}
        />
        <label>Content</label>
        <textarea
          required
          name="content"
          placeholder="Enter post content"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button className="post-create-button" onClick={handlePostCreate}>
          Create Post
        </button>
      </form>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      <p>
        * if you want to change the post contact admin

      </p>
    </div>
  );
};

export default PostCreatePage;

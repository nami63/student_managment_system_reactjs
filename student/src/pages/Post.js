import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footers";
import PostCreatePage from "../components/Post/PostCreatePage";

const Post = () => {
  return (
    <div className="App1">
      <Header />
      <PostCreatePage />
      <Footer />
    </div>
  );
};

export default Post;

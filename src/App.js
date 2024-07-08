// src/App.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PostsDisplay from "./components/PostsDisplay";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [currentPost, setCurrentPost] = useState(null);

  const handleEdit = (post) => {
    setCurrentPost(post);
  };

  const handleCancelEdit = () => {
    setCurrentPost(null);
  };

  return (
    <Container className="my-5">
      <CreatePost currentPost={currentPost} onCancelEdit={handleCancelEdit} />
      <PostsDisplay onEdit={handleEdit} />
    </Container>
  );
};

export default App;

// src/components/CreatePost.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../redux/postsSlice";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const CreatePost = ({ currentPost, onCancelEdit }) => {
  const [title, setTitle] = useState(currentPost ? currentPost.title : "");
  const [content, setContent] = useState(
    currentPost ? currentPost.content : ""
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      dispatch(updatePost({ id: currentPost.id, title, content }));
      onCancelEdit();
    } else {
      dispatch(addPost({ title, content }));
    }
    setTitle("");
    setContent("");
  };

  return (
    <Container className="my-5">
      <h2>{currentPost ? "Edit Post" : "Create Post"}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Content
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" className="me-2">
          {currentPost ? "Update" : "Create"}
        </Button>
        {currentPost && (
          <Button variant="secondary" onClick={onCancelEdit}>
            Cancel
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default CreatePost;

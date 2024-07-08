// src/components/PostItem.js
import React from "react";
import { Button, Card } from "react-bootstrap";

const PostItem = ({ post, onEdit }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <Button variant="primary" onClick={() => onEdit(post)}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostItem;

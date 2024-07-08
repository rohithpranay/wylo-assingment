// src/components/PostsDisplay.js
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import PostItem from "./PostItem";
import { Container } from "react-bootstrap";

const PostsDisplay = ({ onEdit }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container className="my-5">
      {posts.map((post) => (
        <PostItem key={nanoid()} post={post} onEdit={onEdit} />
      ))}
    </Container>
  );
};

export default PostsDisplay;

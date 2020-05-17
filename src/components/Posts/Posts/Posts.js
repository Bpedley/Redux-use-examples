import React from "react";
import Post from "../Post/Post";
import "./Posts.scss";

const uniqid = require("uniqid");

const Posts = ({ isFetching, posts, errorType, errorMessage }) => {
  if (errorType === "getPosts") {
    return <h3>{errorMessage}</h3>;
  } else if (isFetching) {
    return <h3>Loading posts...</h3>;
  }

  return (
    <div>
      <h3>Posts</h3>
      <div className="posts">
        {posts.map(post => (
          <Post data={post} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

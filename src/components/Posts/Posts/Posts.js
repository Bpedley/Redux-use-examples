import React from "react";
import Post from "../Post/Post";
import "./Posts.scss";

const uniqid = require("uniqid");

const Posts = ({ isFetching, fetchType, posts, errorType, errorMessage }) => {
  return (
    <div>
      <h3>Posts</h3>
      {isFetching && fetchType === "getPosts" ? (
        <h3 className="loader">Loading...</h3>
      ) : null}
      {errorType ? <h3 className="error">Error: {errorMessage}</h3> : null}
      <div className="posts">
        {posts.map(post => (
          <Post data={post} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

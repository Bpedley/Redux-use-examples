import React from "react";
import "./Post.scss";

const Post = ({ data }) => {
  return (
    <div className="post">
      <h4 className="post-title">{data.title}</h4>
      <p className="post-body">{data.body}</p>
    </div>
  );
};

export default Post;

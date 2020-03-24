import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/Posts";
import PostForm from "./PostForm/PostForm";
import Post from "./Post/Post";
import "./Posts.scss";

const uniqid = require("uniqid");

const Posts = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <hr />
      <h1 className="posts-title">Posts example</h1>
      <PostForm />
      <h3>Posts</h3>
      <div className="posts">
        {posts.map(post => (
          <Post data={post} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

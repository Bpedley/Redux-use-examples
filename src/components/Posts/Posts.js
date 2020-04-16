import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchPosts,
  requestPosts,
  createPost
} from "../../redux/actions/Posts";
import PostForm from "./PostForm/PostForm";
import Post from "./Post/Post";
import "./Posts.scss";

const uniqid = require("uniqid");

const Posts = ({ fetchPosts, requestPosts, createPost, posts, isFetching }) => {
  useEffect(() => {
    requestPosts();
    fetchPosts();
  }, [fetchPosts, requestPosts]);

  return (
    <div>
      <hr />
      <h1 className="posts-title">Posts example</h1>
      <PostForm createPost={createPost} />
      {isFetching ? (
        <h3>Loading posts...</h3>
      ) : (
        <div>
          <h3>Posts</h3>
          <div className="posts">
            {posts.map(post => (
              <Post data={post} key={uniqid()} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching
});

export default connect(mapStateToProps, {
  fetchPosts,
  requestPosts,
  createPost
})(Posts);

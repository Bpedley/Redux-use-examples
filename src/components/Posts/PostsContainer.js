import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getPosts,
  setInputFields,
  createPost
} from "../../redux/actions/Posts";
import PostForm from "./PostForm/PostForm";
import Posts from "./Posts/Posts";
import "./PostsContainer.scss";

const PostsContainer = ({
  getPosts,
  setInputFields,
  createPost,
  posts,
  isFetching,
  title,
  body,
  isPosting
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <hr />
      <h1>Posts example</h1>
      <PostForm
        title={title}
        body={body}
        setInputFields={setInputFields}
        createPost={createPost}
        isPosting={isPosting}
      />
      <Posts isFetching={isFetching} posts={posts} />
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching,
  title: state.posts.title,
  body: state.posts.body,
  isPosting: state.posts.isPosting
});

export default connect(mapStateToProps, {
  getPosts,
  setInputFields,
  createPost
})(PostsContainer);

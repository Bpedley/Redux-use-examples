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

const PostsContainer = props => {
  const { getPosts, ...postFormProps } = props;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <hr />
      <h1>Posts example</h1>
      <PostForm {...postFormProps} />
      <Posts
        isFetching={props.isFetching}
        fetchType={props.fetchType}
        posts={props.posts}
        errorMessage={props.errorMessage}
        errorType={props.errorType}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching,
  fetchType: state.posts.fetchType,
  title: state.posts.title,
  body: state.posts.body,
  errorMessage: state.posts.errorMessage,
  errorType: state.posts.errorType
});

export default connect(mapStateToProps, {
  getPosts,
  setInputFields,
  createPost
})(PostsContainer);

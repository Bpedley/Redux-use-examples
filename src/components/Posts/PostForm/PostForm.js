import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../../../redux/actions/Posts";
import "./PostForm.scss";

const PostForm = ({ createPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const post = { title, body };
    createPost(post);
    setTitle("");
    setBody("");
  };

  return (
    <div className="post-form">
      <h2 className="post-form-title">Add Post</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <br />
        </div>
        <br />
        <div>
          <label>
            Text
            <textarea
              name="body"
              onChange={e => setBody(e.target.value)}
              value={body}
            />
          </label>
          <br />
        </div>
        <br />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { createPost })(PostForm);

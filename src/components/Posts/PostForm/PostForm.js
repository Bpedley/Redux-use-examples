import React from "react";
import "./PostForm.scss";

const PostForm = ({
  title,
  body,
  setInputFields,
  createPost,
  isPosting,
  errorMessage,
  errorType
}) => {
  return (
    <div className="post-form">
      <h2 className="post-form-title">Add Post</h2>
      <form onSubmit={e => createPost(e, { title, body })}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={title}
              onChange={setInputFields}
            />
          </label>
          <br />
        </div>
        <br />
        <div>
          <label>
            Text
            <textarea name="body" value={body} onChange={setInputFields} />
          </label>
          <br />
        </div>
        <br />
        <button type="submit" className="submit-btn" disabled={isPosting}>
          Submit<div className={isPosting ? "lds-dual-ring" : null}></div>
        </button>
        {errorType === "createPost" ? <p color="red">{errorMessage}</p> : null}
      </form>
    </div>
  );
};

export default PostForm;

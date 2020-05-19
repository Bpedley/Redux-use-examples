import React from "react";
import "./PostForm.scss";

const PostForm = ({
  title,
  body,
  setInputFields,
  createPost,
  isFetching,
  fetchType
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
        <button type="submit" className="submit-btn" disabled={isFetching}>
          Submit
          <div
            className={
              isFetching && fetchType === "createPost" ? "lds-dual-ring" : null
            }
          ></div>
        </button>
      </form>
    </div>
  );
};

export default PostForm;

import React from "react";
import "./CommentBox.css";

const CommentBox = () => {
  return (
    <div className="commentbox">
      <h3>Leave a Reply</h3>
      <form>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;

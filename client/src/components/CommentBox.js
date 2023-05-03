import React from "react";
import "./CommentBox.css";
import { useState } from "react";
// for id
import { useParams } from "react-router-dom";

const CommentBox = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const commentChange = (e) => {
    setContent(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/posts/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, name, email, date: Date.now() }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    // clear form
    setContent("");
    setName("");
    setEmail("");
  };

  return (
    <div className="commentbox">
      <h3>Leave a Reply</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            onChange={commentChange}
            className="form-control"
            rows="3"
            placeholder="Enter your comment here..."
            name="content"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            onChange={nameChange}
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={emailChange}
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
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

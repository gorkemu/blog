import React from "react";
import { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import CommentBox from "./CommentBox";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const SinglePost = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // get all comments for this post
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="singlepost">
      <section>
        <h1>{post.title}</h1>
        <div className="metafooter">
          <img className="avatar" alt=""></img>
          <span className="author-meta">
            <span className="author-name">{post.author} Gorkem Unal</span>
            <br />
            <span className="post-date">{post.date_formatted}</span>
            <span className="dot"></span>
            <span className="readingtime">4 min read</span>
          </span>
        </div>
        <div className="post-container">
          <img
            src="https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=300"
            alt=""
          ></img>
          <div className="post">
            <div className="content">{HTMLReactParser(post.content || "")}</div>
          </div>
        </div>
      </section>
      {comments && ( // if there are comments
        <section>
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <div className="comment-meta">
                <span className="comment-author-meta">
                  <span className="comment-author">{comment.name}</span>
                  <br />
                  <span className="comment-date">{comment.date_formatted}</span>
                </span>
              </div>
              <div className="comment-content">{comment.content}</div>
            </div>
          ))}
        </section>
      )}
      <CommentBox />
    </div>
  );
};

export default SinglePost;

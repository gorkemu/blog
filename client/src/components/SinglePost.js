// page of a specific post

import React from "react";
import { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = () => {
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

  return (
    <div className="singlepost">
      <section>
        <h1>{post.title}</h1>
        <div className="metafooter">
          <img className="avatar"></img>
          <span className="author-meta">
            <span className="author-name">{post.author} Gorkem Unal</span>
            <br />
            <span className="post-date">{post.date_formatted}</span>
            <span className="dot"></span>
            <span className="readingtime">4 min read</span>
          </span>
        </div>
        <div className="post-container">
          <img src="https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=300"></img>
          <div className="post">
            <div className="content">{HTMLReactParser(post.content || "")}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;

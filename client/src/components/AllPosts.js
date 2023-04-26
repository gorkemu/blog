import React from "react";
import { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import "./AllPosts.css";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  // Get all posts
  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="allposts">
      <h1>Featured Posts</h1>
      <section>
        {posts.map((post) => (
          <div className="post-container" key={post._id}>
            <a href={`/posts/${post._id}`}>
              <img src="https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=300"></img>
            </a>
            <div className="post">
              <h2>
                <a href={`/posts/${post._id}`}>{post.title}</a>
              </h2>

              <div className="content">
                {HTMLReactParser(post.content || "")}
              </div>
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
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AllPosts;

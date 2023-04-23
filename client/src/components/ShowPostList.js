import React from "react";
import { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";

const ShowPostList = () => {
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
    <>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>
        {posts.map((post) => (
          <div className="post-container">
            <div>
              <img src="https://images.unsplash.com/photo-1555181937-efe4e074a301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=300"></img>
            </div>
            <div className="post" key={post._id}>
              <h2> {post.title} </h2>
              <p>{HTMLReactParser(post.content)}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default ShowPostList;

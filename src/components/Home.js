import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data.slice(0, 9)));
  }, []);
  const renderPosts = posts.length ? (
    posts.map((post) => (
      <div key={post.id} className="ui feed">
        <div className="event">
          <div className="content">
            <div className="summary">
              <Link to={`posts/${post.id}`}>{post.title}</Link>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="content">
            <div className="date">{post.body}</div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h3>No posts to display</h3>
  );
  return <div>{renderPosts}</div>;
};

export default Home;

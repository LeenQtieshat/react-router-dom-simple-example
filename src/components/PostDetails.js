import React, { useState, useEffect } from "react";

const PostDetails = ({
  match: {
    params: { post_id }
  }
}) => {
  const [post, setPost] = useState(null);
  // console.log(post_id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);
  const renderPost = post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  ) : (
    <h3>No Post To Display</h3>
  );

  return <div>{renderPost}</div>;
};

export default PostDetails;

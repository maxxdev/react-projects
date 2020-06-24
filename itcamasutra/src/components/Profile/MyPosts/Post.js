import React from "react";

export const Post = ({post}) => {
  return (
    <div className="post">
      <h4> {post.title}</h4>
      <div className="post__body">{post.body}</div>
    </div>
  )
}
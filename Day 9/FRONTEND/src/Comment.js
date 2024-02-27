/*// src/Comments.js
import React from 'react';

import userImage1 from './Images/pikachu.png';
import userImage2 from './Images/pikachu 2.jpeg';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.image} alt="Pikachu" />
      <div className="comment-details">
        <p>{comment.caption}</p>
        <p>{comment.date}</p>
        <p>{comment.timestamp}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export { Comment, CommentList };*/

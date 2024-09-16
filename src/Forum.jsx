import React from 'react';
import './Forum.css';
import postImage from './assets/images/post.jpg';


const posts = [
  { 
    id: 1, 
    title: "Sustainable Fashion News", 
    content: "Here's what happened this week in the world of sustainable fashion.", 
    author: "user_14857345", 
    avatar: "https://via.placeholder.com/150",
    image: "https://via.placeholder.com/500x300",
    likes: 100,
    comments: 1
  },
  { 
    id: 2, 
    title: "Bla bla", 
    content: "Lorem ispum bla bla bla", 
    author: "Tri", 
    avatar: "https://via.placeholder.com/150",
    image: "https://via.placeholder.com/500x300",
    likes: 13,
    comments: 9
  },
  { 
    id: 3, 
    title: "Bla bla", 
    content: "Lorem ispum bla bla bla", 
    author: "Tri", 
    avatar: "https://via.placeholder.com/150",
    image: "https://via.placeholder.com/500x300", // Placeholder for post image
    likes: 13100,
    comments: 1800
  },
  // Add more posts here
];

const Forum = () => {
  return (
    <div className="forum-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <img src={post.avatar} alt="user avatar" className="user-avatar"/>
            <p className="user-name">{post.author}</p>
          </div>
          <img src={postImage} alt="Post visual content" className="post-image"/>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="post-interactions">
            <span className="likes">{post.likes.toLocaleString()} likes</span>
            <span className="comments">{post.comments.toLocaleString()} comments</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forum;

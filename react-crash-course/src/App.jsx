import React, { useState } from 'react';
import Post from "./components/Post";
import PostForm from './components/PostForm';
import './components/PostForm.css';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="App">
      <div className="content">
        <PostForm addPost={addPost} />
        {posts.map((post, index) => (
          <Post 
            key={index}
            name={post.name} 
            title={post.title} 
            content={post.content} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
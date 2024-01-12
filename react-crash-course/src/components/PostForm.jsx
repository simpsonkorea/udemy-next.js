import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ name, title, content });
    setName('');
    setTitle('');
    setContent('');
  };

  return (
    <div>
        <h2>Create Post</h2>
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required className="input" />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" required className="input" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Post Content" required className="input" />
      <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
  );
}

export default PostForm;
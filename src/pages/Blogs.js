// src/pages/Blogs.js
import React from 'react';

function Blogs() {
  const blogs = [
    { title: 'Blog Post One', link: '#' },
    { title: 'Blog Post Two', link: '#' },
    // Add more blogs here
  ];

  return (
    <div className="blogs">
      <h2>My Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;

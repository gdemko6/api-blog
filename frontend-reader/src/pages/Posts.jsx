import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostTitles = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        setPosts(data.posts);
        console.log(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPostTitles();
  }, []);

  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;

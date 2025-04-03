import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostTitles = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        const fetchedPosts = data.posts;
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPostTitles();
  }, []); 

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
    </div>
  );
}

export default Posts;

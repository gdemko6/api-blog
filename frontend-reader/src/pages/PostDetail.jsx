import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

function PostDetail() {
  const { postid } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts/${postid}`);
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    getPost();
  }, [postid]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">Last updated: {new Date(post.lastUpdated).toLocaleString()}</p>
      <article className="post-text">{post.text}</article>
    </div>
  );
}

export default PostDetail;

import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';


function Card({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="card-link">
      <div className="card">
        <h2>{post.title}</h2>
        {/* Additional content can go here */}
      </div>
    </Link>
  );
}

export default Card;

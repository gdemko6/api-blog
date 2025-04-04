import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Posts list route */}
        <Route path="/posts" element={<Posts />} />

        {/* Route for post details and comments */}
        <Route path="/posts/:postid" element={<PostDetail />} />
         
      </Routes>
    </Router>
  );
}

export default App;
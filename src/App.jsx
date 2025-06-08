import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/cards';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import PostDetail from './components/PostDetail';
import About from './components/About';

const App = () => {
  const [posts, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // Number of posts to show on each page
  const postsPerPage = 8;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const skip = (currentPage - 1) * postsPerPage;
        const response = await axios.get(`https://dummyjson.com/posts?limit=${postsPerPage}&skip=${skip}`);
        setData(response.data.posts);
        setTotalPages(Math.ceil(response.data.total / postsPerPage));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="main-content">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={
              Loading ? (
                <h2 className="loading">Loading..</h2>
              ) : (
                <>
                  <Cards posts={posts} />
                  <div className="pagination">
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="pagination-button"
                    >
                      Previous
                    </button>
                    <span className="page-info">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="pagination-button"
                    >
                      Next
                    </button>
                  </div>
                </>
              )
            } />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

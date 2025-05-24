import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css';
import './App.css';
import Navbar from './components/Navbar';

import Cards from './components/cards';

const App = () => {
  const [posts, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts?limit=15&skip=0')
      .then((response) => {
        setData(response.data.posts);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />


      <div className="container">
        {Loading ? (
          <h2 className="loading">Loading..</h2>
        ) : (
          <Cards posts={posts} />
        )}
      </div>
    </>
  );
}

export default App;

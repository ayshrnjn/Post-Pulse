import React from 'react';

const Cards = ({ posts }) => {
  return (
    <div className="card-grid">
      {posts.map((post) => (


        <div key={post.id} className="card">
          
              <h3>{post.title}</h3>

           <p>{post.body}</p>

          <div className="meta">

             <p><strong>Tags:</strong> {post.tags.join(', ')}</p>

            <p><strong>Likes:</strong> {post.reactions?.likes}</p>

            <p><strong>Dislikes:</strong> {post.reactions?.dislikes}</p>

            <p><strong>Views:</strong> {post.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Cards component displays a list of post cards
const Cards = ({ posts }) => {
  // State to keep track of which cards are expanded
  const [expandedCards, setExpandedCards] = useState([]);
  const navigate = useNavigate();

  // Function to toggle 'Read more' for a card
  const handleReadMore = (id, e) => {
    e.stopPropagation(); // Prevent card click
    setExpandedCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="card-grid">
      {posts.map((post) => {
        // Split the post body into words
        const words = post.body.split(' ');
        // Check if the post is longer than 50 words
        const isLong = words.length > 50;
        // Check if this card is expanded
        const isExpanded = expandedCards.includes(post.id);
        // Show only first 50 words if not expanded
        const displayText = isExpanded || !isLong
          ? post.body
          : words.slice(0, 50).join(' ') + '...';

        return (
          <div
            key={post.id}
            className="card beautiful-card"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            {/* Card Title */}
            <h3 className="card-title">{post.title}</h3>
            {/* Card Description */}
            <p className="card-description">{displayText}</p>
            {/* Show 'Read more' or 'Show less' button if needed */}
            {isLong && (
              <button
                onClick={e => handleReadMore(post.id, e)}
                className="read-more-btn"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
            {/* Card Meta Information */}
            <div className="meta">
              <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
              <p><strong>Likes:</strong> {post.reactions?.likes}</p>
              <p><strong>Dislikes:</strong> {post.reactions?.dislikes}</p>
              <p><strong>Views:</strong> {post.views}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} PostPulse. All rights reserved.</span>
      <span className="footer-tagline">Your daily dose of stories & inspiration.</span>
    </div>
  </footer>
);

export default Footer; 
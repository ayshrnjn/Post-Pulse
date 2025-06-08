import React from 'react';

const About = () => (
  <div style={{ width: '100%', minHeight: 'calc(100vh - 120px)', background: '#f6f4f8' }}>
    <div style={{ background: '#6a38c2', color: '#fff', padding: '48px 0 32px 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.8rem', fontWeight: 800, margin: 0 }}>About PostPulse</h1>
      <p style={{ fontSize: '1.3rem', margin: '18px 0 0 0', fontWeight: 400, letterSpacing: 0.5 }}>
        Your daily destination for inspiring stories and a vibrant community.
      </p>
    </div>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 32px 24px' }}>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: '#6a38c2', fontSize: '2rem', marginBottom: 16 }}>What is PostPulse?</h2>
        <p style={{ fontSize: '1.18rem', lineHeight: 1.7 }}>
          <strong>PostPulse</strong> is your platform for discovering, sharing, and engaging with stories from around the world. Whether you want to read, like, or discuss, PostPulse brings together a vibrant community of storytellers and readers.
        </p>
      </section>
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: '#6a38c2', fontSize: '1.5rem', marginBottom: 12 }}>Features</h2>
        <ul style={{ fontSize: '1.08rem', marginLeft: 24, marginBottom: 0 }}>
          <li>Browse a wide variety of posts and stories.</li>
          <li>Sign up to unlock full content and interact with posts.</li>
          <li>Like and dislike posts to share your opinion.</li>
          <li>Enjoy a clean, modern, and responsive design.</li>
        </ul>
      </section>
      <section>
        <h2 style={{ color: '#6a38c2', fontSize: '1.5rem', marginBottom: 12 }}>Tech Stack</h2>
        <p style={{ fontSize: '1.08rem', color: '#444' }}>
          This project is built with <strong>React</strong>, <strong>Vite</strong>, and a public API for demonstration and learning purposes.
        </p>
        <p style={{ fontWeight: 600, color: '#333', marginTop: 24, fontSize: '1.15rem' }}>
          Thank you for visiting PostPulse!
        </p>
      </section>
    </div>
  </div>
);

export default About; 
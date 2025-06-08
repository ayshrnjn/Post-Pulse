import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { hashPassword } from '../utils/hashPassword';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const passwordHash = await hashPassword(password);
    const user = users.find(u => u.username === username && u.passwordHash === passwordHash);
    if (!user) {
      setError('Invalid username or password.');
      return;
    }
    // Set session
    localStorage.setItem('currentUser', JSON.stringify({ username }));
    navigate('/');
    window.location.reload(); // To update UI everywhere
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px #eee' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%' }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 8, background: '#6a38c2', color: '#fff', border: 'none', borderRadius: 6 }}>Login</button>
      </form>
      <div style={{ marginTop: 16 }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login; 
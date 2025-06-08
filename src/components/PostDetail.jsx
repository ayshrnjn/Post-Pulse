import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setPost(null);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: 40 }}>Loading...</div>;
  if (!post) return <div style={{ textAlign: 'center', marginTop: 40 }}>Post not found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 2px 12px #eee' }}>
      <h2 style={{ color: '#6a38c2' }}>{post.title}</h2>
      <p style={{ fontSize: '1.1rem', margin: '24px 0' }}>{post.body}</p>
      <div style={{ color: '#555', marginBottom: 12 }}><strong>Tags:</strong> {post.tags?.join(', ')}</div>
      <div style={{ color: '#555', marginBottom: 12 }}><strong>Likes:</strong> {post.reactions?.likes} &nbsp; <strong>Dislikes:</strong> {post.reactions?.dislikes}</div>
      <div style={{ color: '#555' }}><strong>Views:</strong> {post.views}</div>
    </div>
  );
};

export default PostDetail; 
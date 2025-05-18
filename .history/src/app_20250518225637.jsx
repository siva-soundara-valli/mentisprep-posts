import { useEffect, useState } from 'react';
import { fetchPosts } from './api';
import PostForm from './PostForm';
import PostList from './PostList';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const addPost = post => setPosts(prev => [post, ...prev]);

  return (
    <div className="container">
      <h1>MentisPrep – Posts</h1>
      <PostForm onCreated={addPost} />
      {loading ? <p>Loading…</p> : <PostList posts={posts} />}
    </div>
  );
}

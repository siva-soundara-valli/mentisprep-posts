import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPosts = () => api.get('/posts').then(r => r.data);

export const createPost = data => api.post('/posts', data).then(r => r.data);

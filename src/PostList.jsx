export default function PostList({ posts }) {
  return (
    <ul className="posts">
      {posts.map(p => (
        <li key={p.id} className="card">
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </li>
      ))}
    </ul> 
  );
}

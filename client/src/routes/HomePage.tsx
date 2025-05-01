// src/routes/HomePage.tsx
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to ChattyApp</h1>
      <p>Your real-time chat powered by React, Vite, and Socket.io.</p>
      {/* Links to login/register */}
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </main>
  );
}

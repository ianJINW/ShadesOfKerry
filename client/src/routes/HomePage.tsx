import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-mustard-yellow">
      <h1 className="text-4xl font-bold mb-4">Welcome to Shades Of Kerry</h1>
      <p className="text-lg mb-6">Your real-time chat powered by React, Vite, and Socket.io.</p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-mustard-yellow text-black font-bold rounded hover:bg-yellow-600"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-mustard-yellow text-black font-bold rounded hover:bg-yellow-600"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
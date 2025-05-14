import { Link } from 'react-router-dom';
import useAuthStore from '../store/auth.store';

export default function HomePage() {
  const token = useAuthStore((state) => state.token);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black text-mustard-yellow">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to Shades Of Kerry</h1>
      <p className="text-lg mb-8">Your real-time chat powered by React, Vite, and Socket.io.</p>
      <div className="space-x-6">
        {!token ? (
          <>
            <Link
              to="/login"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 shadow-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 shadow-md"
            >
              Register
            </Link>
          </>
        ) : (
          <Link
            to="/rooms"
            className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 shadow-md"
          >
            Go to Rooms
          </Link>
        )}
      </div>
    </main>
  );
}
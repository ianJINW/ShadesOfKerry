import { Link } from 'react-router-dom';
import useAuthStore from '../store/auth.store';
import getRandomImageUrl from '../utils/background';

export default function HomePage() {
  const token = useAuthStore((state) => state.token);
  return (
    <main className={`min-h-screen bg-[url(${getRandomImageUrl()})] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-8`}>
      <>
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Shades Of Kerry</h1>
        <p className="text-lg mb-8">Your real-time chat powered by React, Vite, and Socket.io.</p>
        <div className="space-x-6">
          {!token ? (
            <>
              <Link to="/login" className="button button-primary">Login</Link>
              <Link to="/register" className="button button-primary">Register</Link>
            </>
          ) : (
            <Link to="/rooms" className="button button-primary">Go to Rooms</Link>
          )}
        </div>
      </>
    </main>
  );
}
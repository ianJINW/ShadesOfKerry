import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithGooglePopup } from '../config/firebase';
import { Unlock } from 'lucide-react';
import useAuthStore, { User } from '../store/auth.store';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate login logic for email/password (to be implemented)
      const user = { id: 1, username: "testuser", email }; // Replace with actual user data
      const token = "sample_token"; // Replace with actual token
      login(user, token);
      nav('/rooms');
    } catch {
      setError('Failed to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await signInWithGooglePopup();

      const user: User = result ? {
        id: 1,
        username: result.user.displayName || 'Google User',
        email: result.user.email || '',
      } : { id: 0, username: '', email: '' };
      const token = "google_token";
      login(user, token);
      nav('/rooms');
    } catch (_) {
      setError(`Error signing in with Google. Please try again. ${_}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)]">
      <div className="w-full max-w-lg p-10 bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)] rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="block mb-2 text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-black bg-mustard-yellow border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>
          <label className="block">
            <span className="block mb-2 text-sm font-medium">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-black bg-mustard-yellow border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-black bg-yellow-400 border border-gray-600 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-[var(--mustard-yellow)] hover:underline">
            Register here
          </Link>
        </p>
      </div>
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className={`mt-6 w-full max-w-lg button button-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Unlock className="inline-block mr-2" size={20} />
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
    </main>
  );
}
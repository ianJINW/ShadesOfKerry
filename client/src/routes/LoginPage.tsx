import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call your auth API
    // on success:
    nav('/rooms');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-mustard-yellow">
      <div className="w-full max-w-md p-8 bg-black border border-mustard-yellow rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="block mb-1 text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-black bg-mustard-yellow border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-sm font-medium">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-black bg-mustard-yellow border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-black bg-mustard-yellow border border-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-mustard-yellow hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
}
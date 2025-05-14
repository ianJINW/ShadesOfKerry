import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-mustard-yellow">
      <h2 className="text-5xl font-extrabold mb-6">404 – Page Not Found</h2>
      <p className="text-lg">
        Return{' '}
        <Link to="/" className="font-bold text-yellow-400 hover:text-yellow-500 underline">
          home
        </Link>
        .
      </p>
    </main>
  );
}
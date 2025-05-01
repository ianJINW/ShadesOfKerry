import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-mustard-yellow">
      <h2 className="text-4xl font-bold mb-4">404 – Page Not Found</h2>
      <p className="text-lg">
        Return{' '}
        <Link to="/" className="font-bold text-mustard-yellow hover:underline">
          home
        </Link>
        .
      </p>
    </main>
  );
}
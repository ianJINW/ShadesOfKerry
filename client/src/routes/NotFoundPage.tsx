import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)]">
      <h2 className="text-5xl font-extrabold mb-6">404 – Page Not Found</h2>
      <p className="text-lg">
        Return{' '}
        <Link to="/" className="font-bold text-[var(--mustard-yellow)] hover:underline">
          home
        </Link>
        .
      </p>
    </main>
  );
}
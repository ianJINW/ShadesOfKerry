// src/routes/NotFoundPage.tsx
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main>
      <h2>404 – Page Not Found</h2>
      <p>
        Return <Link to="/">home</Link>.
      </p>
    </main>
  );
}

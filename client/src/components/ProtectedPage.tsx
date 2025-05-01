import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = Boolean(localStorage.getItem('token'));
  // if not logged in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}


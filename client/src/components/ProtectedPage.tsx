import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/auth.store';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = useAuthStore((state) => state.token);

  // if not logged in, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}


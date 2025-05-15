import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import RoomsPage from './routes/RoomsPage';
import ChatPage from './routes/ChatPage';
import NotFoundPage from './routes/NotFoundPage';
import PlaygroundPage from './routes/PlaygroundPage';
import SustainabilityPage from './routes/SustainabilityPage';
import ContactPage from './routes/ContactPage';
import PortfolioPage from './routes/PortfolioPage';
import ProtectedRoute from './components/ProtectedPage';
import Navbar from './components/navbar';
import useAuthStore from './store/auth.store';
import './index.css';

export default function App() {
  const isDark = useAuthStore((state) => state.isDark);

  return (
    <div className={`${isDark ? 'dark' : ''} bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)]`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Protected routes */}
          <Route
            path="/rooms"
            element={
              <ProtectedRoute>
                <RoomsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rooms/:roomId"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

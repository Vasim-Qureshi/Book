import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
  role: 'user' | 'admin';
}

const ProtectedRoute = ({ children, role }: Props) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  if (role === 'admin' && !user?.isAdmin) return <Navigate to="/login" />;
  if (role === 'user' && user?.isAdmin) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;

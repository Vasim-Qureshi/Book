import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout as LogOut } from '../services/authService';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      if (user) {
        // Call the logout service with the user ID
        LogOut({ userId: user.id });
        logout(); // Clear the user state in context
      }
      // Redirect or update UI on successful logout
      navigate('/login');
      localStorage.removeItem('token');
    } catch (error) {
      // Handle the error, e.g., display an error message to the user
      alert('Logout failed. Please try again.');
    }
  };
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">📚 BookStore</Link>

      <div className="space-x-4">
        {!isAuthenticated && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}

        {isAuthenticated && (
          <>
            <span className="mx-2">|</span><span className="text-sm">Role: {user?.isAdmin ? 'Admin' : 'User'}</span>
            <span className="mx-2">|</span>
            {user?.isAdmin ? (
              <Link to="/admin" className="hover:underline">Admin Dashboard</Link>
            ) : (
              <Link to="/user" className="hover:underline">User Dashboard</Link>
            )}
            <button onClick={handleLogout} className="bg-white text-blue-600 px-3 py-1 rounded ml-2">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

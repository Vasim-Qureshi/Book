import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout as LogOut } from '../services/authService';
import SideMenu from './SideBar';
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      if (user) {
        LogOut({ userId: user.id });
        logout();
      }
      navigate('/login');
      localStorage.removeItem('token');
    } catch (error) {
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <div className='sticky top-0 z-50 h-30 flex flex-col'>
      {/* 🟦 Navbar */}
      <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-md ">
        <div className="flex items-center gap-4">
          {/* 📱 Mobile Menu Button */}
          <button onClick={toggleSidebar} className="lg:hidden text-white">
            <FaBars size={20} />
          </button>

          <Link to="/" className="text-xl font-bold">📚 BookStore</Link>
        </div>
        <div className="space-x-4 text-sm hidden md:flex">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Signup</Link>
            </>
          ) : (
            <>
              <span className='sm:hidden'>{user?.isAdmin ? 'Welcome Admin' : 'Welcome User'}</span>
              <span>|</span>
              {user?.isAdmin ? (
                <Link to="/admin" className="hover:underline sm:hidden">Admin Dashboard</Link>
              ) : (
                <>
                  <Link to="/search" className="hover:underline">Search</Link>
                  <Link to="/cart" className="hover:underline">Cart</Link>
                  <Link to="/orders" className="hover:underline">Orders</Link>
                  <Link to="/profile" className="hover:underline">Profile</Link>
                  <Link to="/user" className="hover:underline sm:hidden">User Dashboard</Link>
                </>
              )}
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 ml-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* 📱 SideMenu (Animated) */}
      <SideMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;

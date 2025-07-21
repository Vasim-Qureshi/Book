import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { logout as LogOut } from '../services/authService';

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideMenu: React.FC<Props> = ({ isOpen, toggleSidebar }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Cart', path: '/cart' },
    { name: 'Orders', path: '/orders' },
    { name: 'Profile', path: '/profile' },
    { name: 'Admin', path: '/admin' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },
  ];
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-64 h-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white z-50 p-5 shadow-lg lg:hidden"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={toggleSidebar}>
          <FaTimes size={20} />
        </button>
      </div>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              onClick={toggleSidebar}
              className="block py-2 px-3 rounded hover:bg-white hover:text-blue-700 transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogout}
        className="bg-white block space-y-6 text-blue-600 hover:text-white px-3 py-2 rounded hover:bg-blue-600 trnsition"
      >
        Logout
      </button>

    </motion.div>
  );
};

export default SideMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserShield, FaPlus, FaUpload, FaEdit, FaTrash } from 'react-icons/fa';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8 border border-red-200">
        <div className="flex items-center space-x-4 mb-6">
          <FaUserShield className="text-red-600 text-4xl" />
          <div>
            <h2 className="text-3xl font-bold text-red-700">Admin Dashboard</h2>
            <p className="text-sm text-gray-500">Welcome, <span className="font-medium">{user?.email}</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Link to="/add-book" className="flex items-center gap-3 p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition shadow">
            <FaPlus /> <span>Add Single Book</span>
          </Link>

          <Link to="/add-books" className="flex items-center gap-3 p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition shadow">
            <FaUpload /> <span>Add Bulk Books</span>
          </Link>

          <Link to="/update-book" className="flex items-center gap-3 p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition shadow">
            <FaEdit /> <span>Update Book</span>
          </Link>

          <Link to="/delete-book" className="flex items-center gap-3 p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition shadow">
            <FaTrash /> <span>Delete Book</span>
          </Link>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          Manage your bookstore’s inventory with ease and control 📘
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

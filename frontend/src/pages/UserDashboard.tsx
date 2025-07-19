import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 border border-blue-100">
        <div className="flex items-center space-x-4 mb-6">
          <FaUserCircle className="text-blue-600 text-5xl" />
          <div>
            <h2 className="text-3xl font-bold text-blue-700">Welcome Back!</h2>
            <p className="text-sm text-gray-500">You're logged in as a valued user</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-50 border border-blue-100 rounded p-4">
            <p className="text-gray-500 text-sm mb-1">📧 Email</p>
            <p className="font-medium text-blue-800">{user?.email}</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded p-4">
            <p className="text-gray-500 text-sm mb-1">🆔 User ID</p>
            <p className="font-medium text-blue-800">{user?.id}</p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          This dashboard is accessible to users only. Enjoy browsing and buying books 📚
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

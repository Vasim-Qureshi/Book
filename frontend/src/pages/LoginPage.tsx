import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login as loginAPI } from '../services/authService';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '', status: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginAPI({ ...formData });
    const data = await res.json();

    if (res.ok && data.token) {
      login(data.token);
      const isAdmin = JSON.parse(atob(data.token.split('.')[1])).isAdmin; // Decode token to check if user is admin where atob() decodes a base-64 encoded string and split('.')[1] selects the payload example
      navigate(isAdmin ? '/admin' : '/user');
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</Link>
      </div>
    </div>
  );
};

export default LoginPage;

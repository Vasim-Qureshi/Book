import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../components/Books';
import { motion } from 'framer-motion';

type Category = {
  label: string;
  icon: string;
  path: string;
};

const categories: Category[] = [
  { label: 'Literature', icon: '📖', path: 'literature' },
  { label: 'Education', icon: '📘', path: 'education' },
  { label: 'Fiction', icon: '📕', path: 'fiction' },
  { label: 'Programming', icon: '💻', path: 'programming' },
  { label: 'Business', icon: '📊', path: 'business' },
  { label: 'Kids', icon: '🧸', path: 'kids' },
];

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen">

      {/* 🎯 Hero Banner */}
      <section className="w-full h-[320px] bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center text-center shadow-md px-4 mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Welcome to BookVerse 📚</h1>
        <p className="text-lg font-medium mt-3">Your Gateway to Knowledge, Fiction & Beyond</p>
      </section>

      {/* 🧭 Category Section */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <Link to={`/category/${cat.path}`} key={cat.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <p className="text-sm font-medium text-gray-700">{cat.label}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ⭐ Featured Books */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">Top Picks for You</h2>
          <button className="text-blue-600 hover:underline font-medium">View All</button>
        </div>
        <Books />
      </section>
    </div>
  );
};

export default HomePage;

import { Link } from 'react-router-dom';
import Books from '../components/Books';

const categories = [
  { label: 'Literature', icon: '📖', path: 'literature' },
  { label: 'Education', icon: '📘', path: 'education' },
  { label: 'Fiction', icon: '📕', path: 'fiction' },
  { label: 'Programming', icon: '💻', path: 'programming' },
  { label: 'Business', icon: '📊', path: 'business' },
  { label: 'Kids', icon: '🧸', path: 'kids' },
];


const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Banner */}
      <div className="w-full h-[320px] bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-4xl font-bold shadow-md mb-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Welcome to BookVerse 📚</h1>
          <p className="text-lg font-medium mt-4">Your Gateway to Knowledge, Fiction & Beyond</p>
        </div>
      </div>

      {/* ✅ Category Section */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {categories.map((cat) => (
            <Link to={`/category/${cat.path}`} key={cat.path}>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="text-4xl mb-2">{cat.icon}</div>
                <p className="text-sm font-medium text-gray-700">{cat.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Featured Books */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Top Picks for You</h2>
          <button className="text-blue-600 hover:underline font-medium">View All</button>
        </div>
        <Books />
      </div>
    </div>
  );
};

export default HomePage;

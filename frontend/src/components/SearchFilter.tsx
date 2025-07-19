// src/components/SearchFilter.tsx
import { useState } from 'react';

interface Props {
  onFilter: (category: string, search: string) => void;
}

const categories = ['', 'literature', 'education', 'fiction', 'programming', 'business', 'kids'];

const SearchFilter = ({ onFilter }: Props) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(category, search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded w-full sm:w-1/2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-3 py-2 rounded w-full sm:w-1/3"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === '' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Filter
      </button>
    </form>
  );
};

export default SearchFilter;

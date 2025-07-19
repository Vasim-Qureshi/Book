// src/pages/AddBookPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/bookService';

const AddBookPage: React.FC = () => {
  const [form, setForm] = useState({ title: '', author: '', price: '', description: '', imageUrl: '', category: '' });
  const navigate = useNavigate();
  const categories = ['literature', 'education', 'fiction', 'programming', 'business', 'kids'];

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle category selection
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await addBook(form);
    if (res.ok) {
      alert('Book added successfully');
      navigate('/');
    } else {
      alert('Failed to add book');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <select
          name="category"
          value={form.category}
          onChange={handleSelectChange}
          className="border px-3 py-2 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} type="number" className="w-full p-2 border rounded" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 w-full rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
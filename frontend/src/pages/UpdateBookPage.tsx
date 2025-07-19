// src/pages/UpdateBookPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateBook } from '../services/bookService';

const UpdateBookPage: React.FC = () => {
  const [form, setForm] = useState({ id: '', title: '', author: '', price: '', description: '', imageUrl: '', category: '' });
  const navigate = useNavigate();
  const categories = ['literature', 'education', 'fiction', 'programming', 'business', 'kids'];

    // Handle category selection
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateBook(form);
    if (res.ok) {
      alert('Book updated successfully');
      navigate('/');
    } else {
      alert('Failed to update book');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Update Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="id" placeholder="Book ID" value={form.id} onChange={handleChange} className="w-full p-2 border rounded" />
        <select
          name="category"
          value={form.category}
          onChange={handleSelectChange}
          className="border px-3 py-2 rounded"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} type="number" className="w-full p-2 border rounded" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-yellow-500 text-white py-2 w-full rounded">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBookPage;

// src/pages/DeleteBookPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../services/bookService';

const DeleteBookPage: React.FC = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    const res = await deleteBook(id);
    if (res.ok) {
      alert('Book deleted');
      navigate('/');
    } else {
      alert('Failed to delete');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Delete Book</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Book ID"
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={handleDelete} className="bg-red-600 text-white w-full py-2 rounded">
        Delete Book
      </button>
    </div>
  );
};

export default DeleteBookPage;

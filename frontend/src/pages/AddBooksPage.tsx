// src/pages/AddBooksPage.tsx
import React from 'react';
import { books } from '../data/booksData';
import { bulkAddBooks } from '../services/bookService';
import { useNavigate } from 'react-router-dom';


const AddBooksPage: React.FC = () => {
  const navigate = useNavigate();

  const handleUpload = async () => {
    console.log('Uploading books...', books);
    const booksWithStringPrice = books.map(book => ({
      ...book,
      price: String(book.price),
    }));
    console.log('Uploading books:', booksWithStringPrice);
    const res = await bulkAddBooks(booksWithStringPrice);
    const data = await res.json();
    console.log('Response:', data);
    if (data && data.count) {
      alert(`${data.count} books uploaded.`);
      navigate('/');
    } else {
      alert('Failed to upload books');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Upload Static Books</h1>
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
        Upload Books
      </button>
    </div>
  );
};

export default AddBooksPage;

import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../services/bookService';
import { Link } from 'react-router-dom';

interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await getAllBooks();
      const data = await res.json();
      if (res.ok) {
        setBooks(data);
      } else {
        alert('Failed to load books');
      }
    };
    fetchBooks();
  }, []);

  if (!books.length) return <div className="text-center mt-10">No books available.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {books.map((book) => (
        <Link
          to={`/book/${book._id}`}
          key={book._id}
          className="border p-4 rounded shadow hover:shadow-lg transition duration-300 bg-white"
        >
          <div className="hover:scale-105 transition">

            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h3 className="text-lg font-bold text-blue-700 mb-1">{book.title}</h3>
            <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
            <p className="text-green-700 font-semibold mb-2">₹{book.price}</p>
            <p className="text-gray-500 text-sm line-clamp-3">
              {book.description.length > 100
                ? book.description.slice(0, 100) + '...'
                : book.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Books;

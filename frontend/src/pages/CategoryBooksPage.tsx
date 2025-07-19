// src/pages/CategoryBooksPage.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBooks } from '../services/bookService';

type Book = {
  _id: string;
  title: string;
  category: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
};

const CategoryBooksPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBooks(category);
      const data = await res.json();
      setBooks(data);
    };
    fetchData();
  }, [category]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{category} Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            to={`/book/${book._id}`}
            key={book._id}
            className="border p-4 rounded shadow hover:shadow-lg transition duration-300 bg-white"
          >
            <div className="hover:scale-105 transition">

              <div key={book._id} className="bg-white p-4 shadow rounded">
                <img src={book.imageUrl} alt={book.title} className="h-40 object-contain mb-3" />
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-blue-700 font-bold">₹{book.price}</p>
                <p className="text-sm text-gray-600">{book.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooksPage;

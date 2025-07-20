// src/pages/BookDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById } from '../services/bookService';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { addToCartAPI } from '../services/cartServices'; // ✅ Import API

interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
}

const BookDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const { cartItems, setCartItems } = useCart();
  const { user } = useAuth(); // Assuming you have user context for auth
  console.log('user in BookDetailsPage:', user);


  const navigate = useNavigate();


  useEffect(() => {
    const fetchBook = async () => {
      if (!id) return;
      const res = await getBookById(id);
      const data = await res.json();
      if (res.ok) {
        setBook(data);
      } else {
        alert('Book not found');
      }
    };
    fetchBook();
  }, [id]);

  // ✅ Add to cart using backend
  const handleAddToCart = async () => {
    if (!book) return;
    if (!user?.id) {
      alert('You must be logged in to add items to the cart.');
      return;
    }

    try {
      const res = await addToCartAPI({ productId: book._id, quantity: 1, userId: user.id });

      if (!res.ok) {
        throw new Error('Failed to add to cart');
      }

      // Update cart without mutating existing state
      setCartItems(prev => {
        const exists = prev.find(item => item._id === book._id);
        if (exists) {
          return prev.map(item =>
            item._id === book._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
          );
        }
        return [...prev, { ...book, quantity: 1 }];
      });
      console.log('Book added to cart:', book);
      console.log('Updated cart items:', cartItems);
      
      alert(`Added "${book.title}" to cart!`);
      navigate('/cart'); // Only navigate after cart state is updated
    } catch (err) {
      alert('Something went wrong while adding to cart.');
      console.error(err);
    }
  };


  if (!book) return <div className="text-center mt-10">Loading book details...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow rounded flex flex-col md:flex-row gap-6">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-full md:w-1/3 h-64 object-contain rounded"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">{book.title}</h2>
        <p className="text-gray-600 mb-1">by {book.author}</p>
        <p className="text-green-600 font-semibold text-lg mb-4">₹{book.price}</p>
        <p className="text-gray-700">{book.description}</p>
        <p className="text-gray-500 mt-4">Category: {book.category}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;

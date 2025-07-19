import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../services/bookService';
import SearchFilter from '../components/SearchFilter';

type Book = {
    _id: string;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
    description?: string;
    category: string;
};

const SearchPage = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const handleFilter = async (category: string, search: string) => {
        const res = await getBooks(category, search);
        const data = await res.json();
        setBooks(data);
    };


    useEffect(() => {
        handleFilter('', '');
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Find Your Next Read</h2>
            <SearchFilter onFilter={handleFilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book) => (
                    <Link
                        to={`/book/${book._id}`}
                        key={book._id}
                        className="border p-4 rounded shadow hover:shadow-lg transition duration-300 bg-white"
                    >
                        <div className="hover:scale-105 transition">
                            <div key={book._id} className="bg-white p-4 rounded shadow">
                                <img src={book.imageUrl} alt={book.title} className="h-40 object-contain mb-3" />
                                <h3 className="font-semibold">{book.title}</h3>
                                <p className="text-sm text-gray-600">{book.author}</p>
                                <p className="text-blue-700 font-bold">₹{book.price}</p>
                                <p className="text-sm text-gray-500">{book.description}</p>
                                <p className="text-sm text-gray-500">Category: {book.category}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;

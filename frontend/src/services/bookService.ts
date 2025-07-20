// src/services/bookService.ts

const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const token = () => localStorage.getItem('token');

// ===========================================================================================================================
// Fetch books by category
export const addBook = (book: { title: string; author: string; price: string; description: string; imageUrl: string; }) => {
  return fetch(`${URL}/api/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(book)
  });
};

// ============================================================================================================================
// Define the Book type if not already imported
export type Book = {
  id?: string;
  title: Required<string>;
  author: Required<string>;
  price: Required<string | number>;
  description: Required<string>;
  imageUrl: Required<string>;
  category: Required<string>;
};

// Bulk add books
export const bulkAddBooks = (books: Book[]) => {
  console.log('Bulk adding books:', books);
  return fetch(`${URL}/api/books/bulk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(books) // Changed from { books } to books
  });
};

//=======================================================================================================================

// Fetch all books
export const getAllBooks = () => {
  return fetch(`${URL}/api/books`);
};

//===========================================================================================================================

// Uncomment the following if you want to use category filtering without search
// export const getBooks = async (category?: string) => {
//   const url = category ? `category=${category}` : `/URL/books`;
// return fetch(`${URL}?${url}`);
// };

// =========================================================================================================================
// Fetch books with optional category and search parameters
export const getBooks = async (category?: string, search?: string) => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (search) params.append('search', search);

  return fetch(`${URL}/api/books?${params.toString()}`);
};

// ============================================================================================================================
// Fetch a single book by ID
export const getBookById = (id: string) => {
  return fetch(`${URL}/api/books/${id}`);
};


// ============================================================================================================================
// Update a book by ID
export const updateBook = (book: { id: string; title: string; author: string; price: string; description: string; imageUrl: string; }) => {
  return fetch(`${URL}/api/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(book)
  });
};

// ============================================================================================================================
// Delete a book by ID
export const deleteBook = (id: string) => {
  return fetch(`${URL}/api/books/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token()}`
    }
  });
};

// ============================================================================================================================
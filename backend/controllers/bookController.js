import Book from '../models/Book.js';

// ======================================================================================================================
// Add a new book
export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: 'Add book failed', error: err.message });
  }
};

// ======================================================================================================================
// Bulk add books
// This endpoint expects an array of book objects in the request body
export const bulkAddBooks = async (req, res) => {
  try {
    const books = req.body;
    const inserted = await Book.insertMany(books);
    res.status(201).json({ count: inserted.length });
    console.log(`Inserted ${inserted.length} books successfully`);
    
  } catch (err) {
    console.error('Bulk upload failed:', err);
    res.status(400).json({ message: 'Bulk upload failed', error: err.message });
  }
};

// =====================================================================================================================
// Uncomment the following code if you want to use the original getAllBooks function without filtering by category
// export const getAllBooks = async (req, res) => {
  // try {
    // const books = await Book.find();
    // res.json(books);
  // } catch (err) {
    // res.status(500).json({ message: 'Fetch failed' });
  // }
// };
// ==================================================================================================================

// Uncomment the following code if you want to use the original getAllBooks function without filtering by category
// export const getAllBooks = async (req, res) => {
//   try {
    // const { category } = req.query;
    // const filter = category ? { category } : {};
    // const books = await Book.find(filter);
    // res.json(books);
  // } catch (err) {
    // res.status(500).json({ message: 'Fetch failed' });
  // }
// };

// ======================================================================================================================

// Get books with optional search and category parameters
export const getAllBooks = async (req, res) => {
  try {
    const { category, search } = req.query;

    const filter = {};

    // ✅ Case-insensitive category match
    if (category) {
      filter.category = { $regex: new RegExp(category, 'i') };
    }

    // ✅ Case-insensitive search match
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } }, // search in title
        { author: { $regex: search, $options: 'i' } }, // search in author
      ];
    }

    const books = await Book.find(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// ======================================================================================================================

// Get a single book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed' });
  }
};

// ======================================================================================================================

// Update a book by ID
export const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
};

// ======================================================================================================================

// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed' });
  }
};

// ======================================================================================================================
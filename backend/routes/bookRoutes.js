import express from 'express';
import {
  addBook,
  bulkAddBooks,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/bookController.js';

import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Admin Protected
router.post('/', protect, adminOnly, addBook);
router.post('/bulk', protect, adminOnly, bulkAddBooks);
router.put('/:id', protect, adminOnly, updateBook);
router.delete('/:id', protect, adminOnly, deleteBook);

export default router;

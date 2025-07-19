import express from 'express';
import { addToCart,getCartItems,removeFromCart,clearCart,updateCartQuantity } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// routes/cartRoutes.js
router.post('/add', protect, addToCart);
router.get('/', protect, getCartItems);
router.delete('/:id', protect, removeFromCart);
router.delete('/', protect, clearCart);
router.patch('/update/:id', protect, updateCartQuantity);

export default router;
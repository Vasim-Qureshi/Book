import CartItem from '../models/CartItem.js';
import Book from '../models/Book.js';

// Add to cart
export const addToCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;
  // const userId = req.user._id;
  try {
    let cartItem = await CartItem.findOne({ userId, productId });

    if (cartItem) {
      // If item exists, update quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({ userId, productId, quantity });
    }

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
};

// Get cart items
export const getCartItems = async (req, res) => {
  const userId = req.user._id;
  try {
    const cartItems = await CartItem.find({ userId }).populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    await CartItem.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing cart item', error });
  }
};

// Clear entire cart
export const clearCart = async (req, res) => {
  try {
    await CartItem.deleteMany({ userId: req.user._id });
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error });
  }
};

// PATCH /api/cart/update/:id
export const updateCartQuantity = async (req, res) => {
  const { delta } = req.body;
  const userId = req.user._id;
  const cartItemId = req.params.id;

  try {
    const item = await CartItem.findOne({ _id: cartItemId, userId });

    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    item.quantity += delta;
    if (item.quantity <= 0) {
      await item.remove();
      return res.json({ message: 'Item removed from cart' });
    }

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update quantity' });
  }
};
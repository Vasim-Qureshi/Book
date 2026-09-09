// controllers/orderController.js
import Order from "../models/Order.js";
import Cart from "../models/CartItem.js";

export const placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const { cartItems, address, card = {} } = req.body;

    if (!card.cardNumber || !card.expiry) {
      return res.status(400).json({ message: "Payment card details missing" });
    };
    console.log(cartItems, address, card);

    // Get cart from DB
    const cartItem = await Cart.find({ userId }).populate("productId");

    if (!cartItem || cartItem.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Prepare product list
    const products = cartItem.map((item) => ({
      productId: item.productId._id,
      quantity: item.quantity,
    }));

    // Calculate total
    const total = cartItem.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );

    // Mask card number
    const maskedCardNumber = "****" + card.cardNumber.slice(-4); // Mask last 4 digits

    // Create order
    const newOrder = await Order.create({
      userId,
      products,
      total,
      address,
      payment: {
        cardNumber: maskedCardNumber,
        expiry: card.expiry,
      },
    });

    // Clear cart after order
    await Cart.deleteMany({ userId });

    res.status(201).json(newOrder);
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ message: "Order failed", error: err.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ userId })
      .populate('products.productId')
      .sort({ orderDate: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('products.productId')
      .populate('userId', 'name email');

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch order", error: err.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'name email')
      .populate('products.productId');

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Admin fetch failed", error: err.message });
  }
};

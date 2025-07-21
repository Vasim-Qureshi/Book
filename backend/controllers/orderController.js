// controllers/orderController.js
import Order from "../models/Order.js";
import Cart from "../models/CartItem.js";

export const placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const {cartItems,Total, delivery, payment } = req.body;
    console.log(cartItems, Total, delivery, payment);

    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const products = cart.items.map(item => ({
      productId: item.productId._id,
      quantity: item.quantity,
    }));

    const total = cart.items.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

    const maskedCardNumber = '****' + payment.cardNumber.slice(-4);

    const newOrder = await Order.create({
      userId,
      products,
      total,
      delivery,
      payment: {
        cardNumber: maskedCardNumber,
        expiry: payment.expiry,
      },
    });

    await Cart.findOneAndDelete({ userId });
    res.status(201).json(newOrder);

  } catch (err) {
    console.error(err);
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

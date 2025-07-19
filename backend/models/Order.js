import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Book',
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],
    total: {
      type: Number,
      required: true,
      min: 0
    },
    orderDate: {
      type: Date,
      default: Date.now
    },
    delivery: {
    name: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  payment: {
    cardNumber: String, // Store masked like '****1234'
    expiry: String,
  }
  },
  {
    timestamps: true // Adds createdAt and updatedAt
  }
);

export default mongoose.model("Order", orderSchema);

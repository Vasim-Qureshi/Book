// src/pages/CheckOut.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { placeOrderWithAddress } from '../services/orderServices'; // ✅ Import the API function

const CheckOut: React.FC = () => {
  const navigate = useNavigate(); // For navigating to receipt page after placing order
  const location = useLocation(); // For getting cart items and total from location state


  const [address, setAddress] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const [card, setCard] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const cartItems = (location.state as any)?.cartItems || []; // Get cart items from location state
  const total = (location.state as any)?.total || 0; // Get total from location state

  console.log('Cart items:', cartItems);
  console.log('Total:', total);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await placeOrderWithAddress(cartItems,total,address, card);
    const order = await res.json();

    if (res.ok) {
      navigate(`/receipt/${order._id}`);
    } else {
      alert('Payment or order failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-semibold">Delivery Address</h3>
        {['name', 'phone', 'street', 'city', 'state', 'zip'].map((field) => (
          <input
            key={field}
            type="text"
            required
            placeholder={field.toUpperCase()}
            value={(address as any)[field]}
            onChange={(e) =>
              setAddress({ ...address, [field]: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        ))}

        <h3 className="text-lg font-semibold mt-4">Payment Info</h3>
        <input
          type="text"
          required
          placeholder="Card Number"
          value={card.cardNumber}
          onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          required
          placeholder="Expiry (MM/YY)"
          value={card.expiry}
          onChange={(e) => setCard({ ...card, expiry: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          required
          placeholder="CVV"
          value={card.cvv}
          onChange={(e) => setCard({ ...card, cvv: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Pay & Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;

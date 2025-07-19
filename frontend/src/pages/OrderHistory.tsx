// src/pages/OrderHistory.tsx
import React, { useEffect, useState } from 'react';
import { getMyOrders } from '../services/orderServices';

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getMyOrders();
      const data = await res.json();
      if (res.ok) {
        setOrders(data);
      }
    };
    fetchOrders();
  }, []);

  if (orders.length === 0)
    return <div className="text-center mt-10 text-gray-600">No orders found.</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-bold text-center">Order History</h2>
      {orders.map((order, i) => (
        <div key={i} className="border rounded p-4">
          <h3 className="font-semibold">Order #{i + 1}</h3>

          <div className="text-sm mt-2 text-gray-700">
            <p><strong>Name:</strong> {order.delivery.name}</p>
            <p><strong>Phone:</strong> {order.delivery.phone}</p>
            <p><strong>Address:</strong> {order.delivery.street}, {order.delivery.city}, {order.delivery.state} {order.delivery.zip}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Paid by:</strong> ****{order.payment.cardNumber.slice(-4)}</p>
          </div>

          <div className="mt-2">
            <h4 className="font-semibold">Items:</h4>
            {order.products.map((item: any, j: number) => (
              <p key={j}>
                {item.productId.title} × {item.quantity} = ₹{item.productId.price * item.quantity}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
